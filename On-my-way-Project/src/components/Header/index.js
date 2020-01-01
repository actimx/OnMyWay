import React from "react";
import { Image } from 'react-native';
import { Header, Body, Right, Left, Thumbnail, Icon, Button } from "native-base";
import { withNavigation } from "react-navigation";

import { PRIMARY_DARK, PROFILE } from "../../consts";
import styles from './style';

const LOGO_OFICIAL = require('../../../assets/onmyway-logo.png');

export function MyHeader({ imageUri, showBack, navigation }) {
    
    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleProfileImagePress = () => {
        navigation.navigate(PROFILE);
    };

    return (
        <Header androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
            <Left>
                {showBack && (
                    <Icon 
                    android="md-arrow-round-back" 
                    ios="ios-arrow-round-back"
                    onPress={handleBackPress}
                    /> 
                )}
            </Left>
            <Body>
                <Image source={LOGO_OFICIAL} />
            </Body>
            <Right>
                <Button onPress={handleProfileImagePress} transparent>
                    <Thumbnail source={{ uri: imageUri && imageUri }} small />
                </Button>
            </Right>
        </Header>
    );
}

export default withNavigation(MyHeader);