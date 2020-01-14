import { StyleSheet, Dimensions } from 'react-native';
import Constants from "expo-constants";
import { PRIMARY_DARK } from '../../consts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        // backgroundColor: PRIMARY_DARK,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    itemMenu: {
        borderBottomWidth: 0,
        paddingTop: 30,
        justifyContent: 'space-around',
        width
    },
    btnContainer: {
        flexDirection: 'column',
        width: width / 2.5,
        height: width / 2.5
    },
    googleIcon: {
        width: 90,
        height: 90
    }
});