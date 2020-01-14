import React, { useEffect, useState } from "react";
import { Container, Content, Text, Item, Button } from "native-base";
import { BackHandler, ScrollView, Image, Alert } from "react-native";

import MyHeader from "../../components/Header";
import MyFooter from "../../components/Footer";
import { USER_INFO, GROUPS_ICON, NOTIFICATION_ICON, NAVIGATE_ICON, PROFIL_ICON , CONFIGURATION_ICON, PROFILE, GROUPS} from "../../consts";
import { getItem } from "../../utils/storage";

import styles from './style';

export default function Home ({ navigation }) {
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
    const handleRedirectProfil = () => {
        navigation.navigate(PROFILE);
    };
    const handleRedirectGroup = () => {
        navigation.navigate(GROUPS);
    };

    const handleRedirectConfiguration = () => {
        // navigation.navigate(GROUPS);
        alert("Sorry, we are working on it.");
    };

    return (
        <Container>
            <MyHeader imageUri={userInfo && userInfo.photoUrl}/>
            
            
            <Content contentContainerStyle={styles.content}>
                {/* <ScrollView> */}
                    <Item style={styles.itemMenu}>
                        <Button style={styles.btnContainer} light
                        onPress={handleRedirectGroup}>
                            <Image source={GROUPS_ICON} style={styles.googleIcon} />
                            <Text>GROUPS</Text>
                        </Button>

                        <Button  style={styles.btnContainer} light  onPress={handleRedirectConfiguration}>
                            <Image source={NOTIFICATION_ICON} style={styles.googleIcon} />
                            <Text>NOTIFICATIONS</Text>
                        </Button>
                    </Item>
                    <Item style={styles.itemMenu}  onPress={handleRedirectConfiguration}>
                        <Button  style={styles.btnContainer} light>
                            <Image source={NAVIGATE_ICON} style={styles.googleIcon} />
                            <Text>NAVIGATE</Text>
                        </Button>

                        <Button  style={styles.btnContainer} light
                        onPress={handleRedirectProfil}>
                            <Image source={PROFIL_ICON} style={styles.googleIcon} />
                            <Text>PROFIL</Text>
                        </Button>
                    </Item>
                    <Item style={styles.itemMenu}>
                        {/* <Button style={styles.btnContainer}>
                            <Image source={GROUPS_ICON} style={styles.googleIcon} />
                            <Text>MESSAGE</Text>
                        </Button> */}

                        <Button  style={styles.btnContainer} light onPress={handleRedirectConfiguration}>
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