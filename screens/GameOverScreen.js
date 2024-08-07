import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.jpg')} style={styles.images} />
            </View>
            <Text style={styles.summery}>
                Your Device needed <Text style={styles.highlight}>{rounds} </Text>
                round to guess the number<Text style={styles.highlight}> {userNumber} </Text>
            </Text>
            <PrimaryButton onPressButton={onStartNewGame}>Start a new Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    images: {
        width: '100%',
        height: '100%'
    },
    summery: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    highlight: {
        padding: 4,
        fontWeight: 'bold',
        color: Colors.primary600,
    }
})
export default GameOverScreen;