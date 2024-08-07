import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.colorWhite,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.colorWhite,
        padding: 12,
    }
})

export default Title;