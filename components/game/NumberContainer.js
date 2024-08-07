import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accentColor,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accentColor,
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default NumberContainer;