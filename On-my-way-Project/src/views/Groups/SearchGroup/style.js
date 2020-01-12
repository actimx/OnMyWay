import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PRIMARY, PRIMARY_DARK } from "../../../consts";

export default StyleSheet.create({
    header: {
        backgroundColor: PRIMARY,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    },
    view: {
        margin: 5
    },
    button: {
        backgroundColor: PRIMARY_DARK
    }
});