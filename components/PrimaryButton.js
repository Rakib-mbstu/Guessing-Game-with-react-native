import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log("Pressed");
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={pressHandler}
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#7206ef',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }

})
export default PrimaryButton;