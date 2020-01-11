import React from "react";
import { Container, Content, Text, View, Grid, Form, Item, Input, Button, Footer, FooterTab } from "native-base";
import { ImageBackground, Image, ScrollView } from "react-native";

import styles from "./style";

import { RegisterBackground, LOGO, WHITE, SECONDARY, PRIMARY, LOGIN } from '../../consts';

export default function Register({navigation}) {
    const handleLoginPress =  () => {
        navigation.navigate(LOGIN);
    };
    return (
    // <ScrollView>
    <Container>
        <Content contentContainerStyle={styles.content}>
            <ImageBackground source={RegisterBackground} style={styles.imageBackground}>
                <ScrollView>
                    <Item style={styles.justifyItem}>
                        <Image source={LOGO} />
                        <Text style={{ color: WHITE, marginBottom: 50 }} >R E G I S T E R</Text>

                        <Item style={styles.input}>
                            <Text style={styles.labelText}>Name:</Text>
                            <Input style={{ color: WHITE }} placeholder="Type your name" placeholderTextColor={SECONDARY} />
                        </Item>
                        <Item style={styles.input}>
                            <Text style={styles.labelText}>Last name:</Text>
                            <Input style={{ color: WHITE }} placeholder="Type your last name" placeholderTextColor={SECONDARY} />
                        </Item>
                        <Item style={styles.input}>
                            <Text style={styles.labelText}>Email address:</Text>
                            <Input style={{ color: WHITE }} placeholder="Enter your e-mail" placeholderTextColor={SECONDARY} />
                        </Item>
                        <Item style={styles.input}>
                        <Text style={styles.labelText}>Password:</Text>
                            <Input style={{ color: WHITE }} placeholder="Enter a password" placeholderTextColor={SECONDARY} />
                        </Item>
                        <Item style={styles.input}>
                        <Text style={styles.labelText}>Confirm Password:</Text>
                            <Input style={{ color: WHITE }} placeholder="Confirm your password" placeholderTextColor={SECONDARY} />
                        </Item>
                        <Item>
                        <Button style={{backgroundColor: SECONDARY}}>
                            <Text style={{color: WHITE}}>Create Account</Text>
                        </Button>
                        </Item>
                        <Item>
                            <Text style={styles.alignText}>Already have an account?</Text>
                            <Input style={{ color: WHITE }} />
                        </Item>

                    </Item>
                </ScrollView>
            </ImageBackground>
        </Content>
        <Footer>
                <FooterTab>
                    <Button full
                     onPress={handleLoginPress}
                     >
                    <Text>Log in</Text>
                    </Button>
                </FooterTab>
            </Footer>
    </Container>
    // </ScrollView>
    );
} ;