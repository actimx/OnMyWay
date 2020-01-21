import React, { useEffect, useState } from "react";
import { Container, Content, Text, Item, Button } from "native-base";
import { BackHandler, ScrollView, Image, Alert } from "react-native";

import MyHeader from "../../components/Header";
import MyFooter from "../../components/Footer";
import { USER_INFO, GROUPS_ICON, EVENTS_ICON, NAVIGATE_ICON, PROFIL_ICON, CONFIGURATION_ICON, PROFILE, GROUPS, MAPS, EVENT } from "../../consts";
import { getItem } from "../../utils/storage";

import styles from './style';

export default function Home({ navigation }) {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleHardwarePress);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress');
        };
    });

    const handleHardwarePress = () => true;

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
        console.log(userInfo);

        setUserInfo(userInfo);
    };

    // REDIRECT'S
    const handleRedirectConfiguration = () => {
        // navigation.navigate(GROUPS);
        alert("Sorry, we are working on it.");
    };

    const handleRedirectMaps = () => {
        navigation.navigate(MAPS);
    };

    return (
        <Container>
            <MyHeader imageUri={userInfo && userInfo.photoUrl} />


            <Content contentContainerStyle={styles.content}>
                {/* <ScrollView> */}
                <Item style={styles.itemMenu}>
                    <Button style={styles.btnContainer} light onPress={() => {navigation.navigate(GROUPS)}}>
                        <Image source={GROUPS_ICON} style={styles.googleIcon} />
                        <Text>GROUPS</Text>
                    </Button>

                    <Button style={styles.btnContainer} light onPress={() => {navigation.navigate(EVENT)}}>
                        <Image source={EVENTS_ICON} style={styles.googleIcon} />
                        <Text>EVENTS</Text>
                    </Button>
                </Item>
                <Item style={styles.itemMenu} onPress={handleRedirectConfiguration}>
                    <Button style={styles.btnContainer} light
                        onPress={handleRedirectMaps}>
                        <Image source={NAVIGATE_ICON} style={styles.googleIcon} />
                        <Text>NAVIGATE</Text>
                    </Button>

                    <Button style={styles.btnContainer} light onPress={() => {navigation.navigate(PROFILE)}}>
                        <Image source={PROFIL_ICON} style={styles.googleIcon} />
                        <Text>PROFIL</Text>
                    </Button>
                </Item>
                <Item style={styles.itemMenu}>
                    {/* <Button style={styles.btnContainer}>
                            <Image source={GROUPS_ICON} style={styles.googleIcon} />
                            <Text>MESSAGE</Text>
                        </Button> */}

                    <Button style={styles.btnContainer} light onPress={handleRedirectConfiguration}>
                        <Image source={CONFIGURATION_ICON} style={styles.googleIcon} />
                        <Text>CONFIGURATION</Text>
                    </Button>
                </Item>
                {/* </ScrollView> */}
            </Content>
            {/* <MyFooter/> */}
        </Container>
    );
}