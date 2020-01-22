import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY } from "../../consts";
import Constants from "expo-constants";
const { width } = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgSize: {
        width: width / 2,
        height: width / 2,
    },
    textNotFound: {
        padding: 10,
        color: PRIMARY,
        fontWeight: "400",
        fontSize: 17,
        textAlign: "center"
    }
});