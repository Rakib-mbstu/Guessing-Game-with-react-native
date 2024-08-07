import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Feather from '@expo/vector-icons/Feather';

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    }
    return randomNumber;
}
let minBoundary = 1, maxBoundary = 100;

function GameScreen({ userNumber, gameOver }) {
    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrnetGuess] = useState(initialGuess);
    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOver();
        }
    }, [currentGuess, userNumber, gameOver])

    function nextGuessHandler(direction) {
        if ((direction == 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie", "You know this is wrong!", [{ text: 'sorry', style: 'cancel' }])
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess - 1;
        }
        else {
            minBoundary = currentGuess + 1;
        }

        setCurrnetGuess(generateRandomNumber(minBoundary, maxBoundary, currentGuess))
    }
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
    }
})

export default GameScreen;