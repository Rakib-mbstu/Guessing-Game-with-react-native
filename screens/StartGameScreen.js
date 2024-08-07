import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";


function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('')
    function numberInputHandler(inputText) {
        setEnteredNumber(inputText)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert('Invalid Number',
                'Enter anything between 1 to 100',
                [{ text: 'Okay', style: 'destructive', onPress: { resetInputHandler } }])
            return;
        }
        onPickNumber(chosenNumber);
        resetInputHandler();
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPressButton={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPressButton={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,//no effect on ios
        //to have the same effect on ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accentColor,
        borderBottomWidth: 2,
        color: Colors.accentColor,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
    }

})

export default StartGameScreen;