import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text>
                #{roundNumber} </Text><Text>Opponent's Guess:{guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accentColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 3
    },
    itemText: {

    }
})
export default GuessLogItem;