import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column'
    },
    grid: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    gridBtn: {
        // alignItems: 'center',
        // justifyContent: 'space-around',
        backgroundColor: 'red',
        height: 0
        // width: width / 1
    },
    title: {
        fontSize: 30,
        fontWeight: '400'
    },
    subtitle: {
        fontSize: 16
    },
    googleBtn: {
        marginTop: 20,
        width: width / 3.1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    facebookBtn: {
        marginTop: 20,
        width: width / 3.1,
        justifyContent: 'center',
        backgroundColor: '#3b5998'
    },
    loginBtn: {
        width: width / 2.5,
        justifyContent: 'center',
        marginTop: 10
    }, 
    googleIcon: {
        width: 30,
        height: 30
    },
    itemInput: {
        width: width / 1.2,
    }
});