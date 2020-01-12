import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PRIMARY, PRIMARY_DARK } from "../../../consts";

export default StyleSheet.create({
    header: {
        backgroundColor: PRIMARY,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    },
    contents: {
        flex: 1
    },
    from: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    view: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    button: {
        backgroundColor: PRIMARY_DARK
    }
});