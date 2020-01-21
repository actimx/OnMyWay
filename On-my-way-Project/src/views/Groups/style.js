import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PRIMARY, PRIMARY_DARK } from "../../consts";

export default StyleSheet.create({
    header: {
        backgroundColor: PRIMARY,
        marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    },
    content: {
        // backgroundColor: PRIMARY_DARK,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    googleIcon: {
        width: 50,
        height: 50,
        marginBottom: 30
    },
    bodyItem: {
        marginTop: 5
    },
    listItem: {
        
    }
});