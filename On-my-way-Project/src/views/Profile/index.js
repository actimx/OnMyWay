import React, { useState, useEffect } from "react";
import { Container, Content, Text, View, Spinner, Thumbnail, Button, Icon } from "native-base";

import styles from "./style";
import { USER_INFO, SECONDARY, LOGIN } from "../../consts";
import { getItem, clearAll } from "../../utils/storage";

export default function Profile({ navigation }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(
        () => {
            if (!userInfo) {
                loadUserInfo();
            }
        },
        [userInfo]
    );

    const loadUserInfo = async () => {
        let userInfo = await getItem(USER_INFO);
        userInfo = JSON.parse(userInfo);
        setUserInfo(userInfo);
    };

    const handleLogoutPress = async () => {
        await clearAll();
        navigation.navigate(LOGIN);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    if (!userInfo) {
    //    return (console.log("error :c"));
        return (<Spinner style={styles.returnSpinner} color={'red'}/>);
    }

    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                <View style={styles.imageContainer}>
                    <Button transparent style={styles.backButton} onPress={handleBackPress}>
                    <Icon android="md-arrow-round-back" ios="ios-arrow-round-back" style={{color: 'white'}}/>
                    </Button>
                    <Thumbnail source={{ uri: userInfo.photoUrl }} style={styles.profileImage}/>
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <Text>Name: {userInfo.givenName}</Text>
                    </View>
                    <View>
                        <Text>Last Name: {userInfo.familyName}</Text>
                    </View>
                    <View>
                        <Text>e-mail: {userInfo.email}</Text>
                    </View>
                    <Button style={styles.logoutBtn} onPress={handleLogoutPress}>
                        <Text>Log out</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
};