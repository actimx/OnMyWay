import { AsyncStorage } from 'react-native';

const saveItem = async (keyName, keyValue) => {
    try {
        return await AsyncStorage.setItem(keyName, keyValue);
    } catch (e) {
        return false;
    }
}

const getItem = async (keyName) => {
    try {
        return await AsyncStorage.getItem(keyName);
    } catch (e) {
        return false;
    }
}

const clearAll = async () => {
    try {
        return await AsyncStorage.clear();
    } catch (e) {
        return false;
    }
}