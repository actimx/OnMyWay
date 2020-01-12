import React, {useState, useEffect} from "react";
import {
    Container, 
    Content,
    Header,
    Thumbnail,
    Left, 
    Body, 
    Right, 
    Button, 
    Icon,
    Form,
    Item,
    Label,
    Input,
    Text, 
    Title,
    Subtitle,
    View,
    Grid} from "native-base";
//import { PRIMARY_DARK } from "../../../consts";
import styles from "./style";

export default function CreateGroup({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={handleBackPress}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Create Group</Title>
                    <Subtitle>New group</Subtitle>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={styles.Content}>
                <View style={styles.view}>
                    <Form>
                        <Grid style={styles.from}>
                            <Thumbnail large source={{uri: "https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png"}} />
                        </Grid>
                        <Grid style={styles.from}>
                            <Item floatingLabel>
                                <Label>Group name:</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Group description:</Label>
                                <Input />
                            </Item>
                        </Grid>
                        <View style={styles.view}>
                            <Button block style={styles.button}>
                                <Text>Create</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
            </Content>
        </Container>
    );
}