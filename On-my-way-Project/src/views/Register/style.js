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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    input: {
        width: width - 30,
        marginBottom: 25,
        flexDirection: 'column',
        alignItems: 'flex-start'
        // justifyContent: 'flex-start'
        // height: 90
    },
    labelText: {
        color: WHITE,
    },
    alignText: {
        color: WHITE,
        width: width,
        textAlign: 'center'
    }
});