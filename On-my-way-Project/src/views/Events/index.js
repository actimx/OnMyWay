import React from 'react';
import { Image } from "react-native";
import { Container, Content, Header, Left, Body, 
    Right, Button, Title, Icon, Item, Text } from "native-base";

import { NOTFOUND_ICON, CREATE_EVENT } from "../../consts";

import styles from "./style";

import ListEvents from "../../components/ListEvents";

export default function Event ({ navigation }) {
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={ () => { navigation.goBack() }}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Events</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                    <Button transparent onPress={() => { navigation.navigate(CREATE_EVENT) }}>
                        <Icon name='add' />
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={styles.content}>
                    {/* <Image source={NOTFOUND_ICON} style={styles.imgSize} />
                    <Text style={styles.textNotFound}>I'm sorry! For the moment there is no events.</Text> */}
                    <ListEvents />
            </Content>
        </Container>
        
    );
};