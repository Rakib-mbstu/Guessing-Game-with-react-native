import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Feather from '@expo/vector-icons/Feather';
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    return randomNumber;
}
let minBoundary = 1, maxBoundary = 100;

function GameScreen({ userNumber, gameOver }) {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrnetGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, gameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if ((direction == 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie", "You know this is wrong!", [{ text: 'sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess - 1;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newGuess = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrnetGuess(newGuess)
        setGuessRounds(prevGuess => [newGuess, ...prevGuess])
    }
    const guessLength = guessRounds.length;
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card >
                <InstructionText style={styles.insText}>Lower or Higher</InstructionText>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPressButton={nextGuessHandler.bind(this, 'lower')}>
                            <Feather name="minus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPressButton={nextGuessHandler.bind(this, 'greater')}>
                            <Feather name="plus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
    },
    insText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})

export default GameScreen;