import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { SECONDARY, WHITE } from '../../consts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        // flexDirection: 'column',
    },
    imageBackground : {  
        width: width,
        height: '100%',
    },
    justifyItem: {
        borderBottomWidth: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    title: { 
        fontSize: 20,
        fontWeight: 'bold',
        color: WHITE, 
        marginBottom: 30 
    },
    input: {
        borderBottomWidth: 0,
        width: width - 30,
        marginBottom: 25,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    labelText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: WHITE,
        marginBottom: 5
    },
    alignText: {
        color: WHITE,
        width: width,
        textAlign: 'center',
        padding: 10
    },
    colorFontTxt: {
        color: WHITE
    },
    textBtnFooter: {
        color: WHITE
    }
});