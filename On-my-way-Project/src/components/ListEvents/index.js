import React from 'react';
import { Image } from "react-native";
import { Container, Content, Header, Left, Body, 
    Right, Button, Title, Icon, Item, Text } from "native-base";

import { NOTFOUND_ICON, CREATE_EVENT } from "../../consts";

import styles from "./style";
import { withNavigation } from 'react-navigation';

export function ListEvent ({ navigation }) {
    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                    {/* <Image source={NOTFOUND_ICON} style={styles.imgSize} />
                    <Text style={styles.textNotFound}>I'm sorry! For the moment there is no events.</Text> */}
                    <Text>Lista de eventos</Text>
            </Content>
        </Container>
        
    );
}

export default withNavigation(ListEvent);