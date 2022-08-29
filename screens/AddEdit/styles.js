import { StyleSheet } from "react-native"
import Constants from "expo-constants";

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        padding: 10
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        textAlignVertical: "top"
    }
})

export default styles;