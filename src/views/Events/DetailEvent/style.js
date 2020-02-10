import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
import { PRIMARY } from "../../../consts";

export default StyleSheet.create({
    header: {
        backgroundColor: PRIMARY
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    item: {
        borderBottomWidth: 0,
        flexDirection: 'column',
        width: width - 15,
        alignItems: 'flex-start',
        marginBottom: 15
    },
    width: {
        width: width - 15,
        marginBottom: 15,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    widthDescription: {
        marginBottom: 0,
        width: width - 15,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    // text's
    title: {
        fontSize: 20,
        color: PRIMARY,
        fontWeight: 'bold',        
    },
    date: {
        paddingRight: 15,
        fontSize: 20,
        color: PRIMARY,
        fontWeight: 'bold',   
    }
});

