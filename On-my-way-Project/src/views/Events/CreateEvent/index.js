import React from 'react';
import { Image } from "react-native";
import { Container, Content, Header, Left, Body, 
    Right, Button, Title, Item, Text, Input, 
    DatePicker } from "native-base";
// React Native Elements
import { Icon } from 'react-native-elements';

import { PRIMARY, WHITE } from "../../../consts";

import styles from "./style";

export default function CreateEvent({ navigation }) {
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent  onPress={ () => { navigation.goBack() }}>
                        <Icon name='arrow-back' color={WHITE} />
                    </Button>
                </Left>
                <Body>
                    <Title>Create events</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={styles.content}>
                <Item style={ styles.justifyContainerItem}>
                    <Item style={ styles.sectionItem}>
                        <Text style={styles.labelText}>Name:</Text>
                        <Item regular>
                            <Input placeholderTextColor={PRIMARY} placeholder="Type the name of event"/>
                        </Item>
                    </Item>
                    <Item style={ styles.sectionItem}>
                        <Text style={styles.labelText}>Address:</Text>
                        <Item regular>
                            <Input placeholderTextColor={PRIMARY} placeholder="Type the name of event"/>
                        </Item>                    
                    </Item>
                    <Item style={ styles.sectionItemDatepicker}>
                        <Text style={styles.labelText}>Datetime:</Text>
                        <Item style={ styles.subSectionItemDatepicker} regular>
                            <DatePicker
                                style={ styles.datepicker }
                                locale={"en"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: PRIMARY }}
                                />
                            <Icon type="font-awesome" name="calendar" color={PRIMARY} />
                        </Item>
                    </Item>
                    <Item style={ styles.sectionItem} full>
                        <Button full>
                            <Text>S a v e</Text>
                            <Icon type="font-awesome" name="save" color={WHITE} />
                        </Button>
                    </Item>
                </Item>
                
                    {/* <Image source={NOTFOUND_ICON} style={styles.imgSize} />
                    <Text style={styles.textNotFound}>I'm sorry! For the moment there is no events.</Text> */}
            </Content>
        </Container>
    );
};