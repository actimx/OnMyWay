import React from "react";
import { Image } from 'react-native';
import { Header, Body, Right, Left, Thumbnail } from "native-base";

import { PRIMARY_DARK } from "../../consts";
import styles from './style';

const LOGO_OFICIAL = require('../../../assets/onmyway-logo.png');

export default function MyHeader({ imageUri }) {
    return (
        <Header androidStatusBarColor={PRIMARY_DARK} style={styles.header}>
            <Left />
            <Body>
                <Image source={LOGO_OFICIAL} />
            </Body>
            <Right>
                <Thumbnail source={{ uri: imageUri && imageUri }} small />
            </Right>
        </Header>
    );
}