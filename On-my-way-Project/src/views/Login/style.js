import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { PRIMARY, SECONDARY, WHITE, PRIMARY_DARK, TERTIARY } from '../../consts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column',
    },
    grid: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    gridBtn: {
        backgroundColor: 'red',
        height: 0
    },
    title: {
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    btnLogin: {
        width: width / 2.5,
        justifyContent: 'center',
        marginTop: 10,
    }, 
    googleBtn: {
        marginTop: 20,
        width: width / 3.1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    redirecURLText: {
        marginTop: 20,
        textDecorationLine: 'underline',
        color: SECONDARY
    },
    facebookBtn: {
        marginTop: 20,
        width: width / 3.1,
        justifyContent: 'center',
        backgroundColor: '#3b5998'
    },
    
    googleIcon: {
        width: 30,
        height: 30
    },
    itemInput: {
        width: width / 1.2,
    },
    btnFooter: {
        backgroundColor: SECONDARY
    },
    textBtnFooter: {
        color: WHITE
    }
});