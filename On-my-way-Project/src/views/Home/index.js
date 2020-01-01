import React, { useEffect, useState } from "react";
import { Container, Content } from "native-base";
import { BackHandler } from "react-native";

import MyHeader from "../../components/Header";
import MyFooter from "../../components/Footer";
import { USER_INFO } from "../../consts";
import { getItem } from "../../utils/storage";

import styles from './style';

export default function Home () {
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

    return (
        <Container>
            <MyHeader imageUri={userInfo && userInfo.photoUrl}/>
            <Content />
            <MyFooter/>
        </Container>
    );
}