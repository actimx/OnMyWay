import React, {useState, useEffect} from "react";
import {
    Container, 
    Content,
    Header, 
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
    View} from "native-base";
import { PRIMARY_DARK } from "../../../consts";
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
            <Content>
                <View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Group name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Descripción del grupo</Label>
                            <Input />
                        </Item>
                        <Button style={{ backgroundColor: PRIMARY_DARK }}>
                            <Text>Create</Text>
                        </Button>
                    </Form>
                </View>
            </Content>
        </Container>
    );
}