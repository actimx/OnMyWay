import { AsyncStorage } from "react-native";

export const saveItem = async (keyName, keyValue) => {
    try {
        await AsyncStorage.setItem(keyName, keyValue);
        return true;
    } catch (error) {
        return false;
    }
}

export const getItem = async (keyName) => {
    try {
        await AsyncStorage.getItem(keyName);
        return true;
    } catch (error) {
        return false;
    }
};

export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (error) {
        return false;
    }
};