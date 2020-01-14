import { StyleSheet } from "react-native";

import { PRIMARY, SECONDARY } from "../../consts";

export default StyleSheet.create({
    footer: {
        backgroundColor: PRIMARY
        // marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    },
    active: {
        backgroundColor: SECONDARY
        // marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
    }
});