import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function InstructionText({ children, style }) {

    return <Text style={[styles.insText, style]}>
        {children}
    </Text>

}
const styles = StyleSheet.create({
    insText: {
        color: Colors.accentColor,
        fontSize: 24,
    }
})
export default InstructionText;