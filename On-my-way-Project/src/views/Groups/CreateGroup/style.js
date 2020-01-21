import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PRIMARY, PRIMARY_DARK, WHITE } from "../../../consts";

export default StyleSheet.create({
    header: {
        backgroundColor: PRIMARY,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    },
    contents: {
        flex: 1
    },
    from: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    item: {
        width: 250
    },
    view: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    labelText: {
        fontSize: 17,
        fontWeight: 'bold',
        // color: WHITE
    },
    colorFontTxt:{
        // color: WHITE
    },
    viewNote: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    textNote: {
        marginTop: 10,
        fontSize: 12,
        
    }
});