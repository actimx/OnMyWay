import React from "react";
import { Container, Content, Text, View, Grid, Form, Item, Input, Button, Footer, FooterTab } from "native-base";
import { ImageBackground, Image, ScrollView } from "react-native";

import styles from "./style";

import { RegisterBackground, LOGO, WHITE, SECONDARY, PRIMARY, LOGIN } from '../../consts';

export default function Register({ navigation }) {

    const [name, onChangeName] = React.useState('ejemplo');
    // const [last_name, onChangeLastName] = React.useState('ejemplo');
    const [email, onChangeEmail] = React.useState('ejemplo@ejemplo.com');
    const [password, onChangePassword] = React.useState('12345678');
    // const [confirm_password, onChangeConfirmPassword] = React.useState('12345678');

    register = async () => {
        try {
            let response = await fetch(
                `https://onmyway69.herokuapp.com/api/auth/register?name=${name}&email=${email}&password=${password}`, {
                method: 'POST'
            });
            let responseJson = await response.json();
            if (responseJson == true) {
                alert("Se registro correctamente");
                navigation.navigate(LOGIN);
            } else {
                alert(responseJson.errors);
                return false;
            }
            return responseJson;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const handleLoginPress = () => {
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
                                <Input style={{ color: WHITE }} placeholder="Type your name"
                                    onChangeText={(name) => onChangeName(name)}
                                    value={name} placeholderTextColor={SECONDARY} />
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Last name:</Text>
                                <Input style={{ color: WHITE }} placeholder="Type your last name" placeholderTextColor={SECONDARY} />
                                {/* <Input style={{ color: WHITE }} placeholder="Type your last name" placeholderTextColor={SECONDARY}
                                    onChangeText={(last_name) => onChangeLastName(last_name)}
                                    value={last_name} placeholderTextColor={SECONDARY} /> */}
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Email address:</Text>
                                <Input style={{ color: WHITE }} placeholder='Enter your e-mail'
                                    onChangeText={(email) => onChangeEmail(email)}
                                    value={email} placeholderTextColor={SECONDARY} />
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Password:</Text>
                                <Input style={{ color: WHITE }} placeholder="Enter a password"
                                    placeholderTextColor={SECONDARY}
                                    onChangeText={(password) => onChangePassword(password)}
                                    value={password}
                                    secureTextEntry={true} />
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Confirm Password:</Text>
                                <Input style={{ color: WHITE }} placeholder="Confirm your password" placeholderTextColor={SECONDARY} />
                                {/* <Input style={{ color: WHITE }} placeholder="Confirm your password"
                                    placeholderTextColor={SECONDARY}
                                    onChangeText={(confirm_password) => onChangeConfirmPassword(confirm_password)}
                                    value={confirm_password}
                                    secureTextEntry={true} /> */}
                            </Item>
                            <Item>
                                <Button style={{ backgroundColor: SECONDARY }}
                                    onPress={register}>
                                    <Text>Create Account</Text>
                                </Button>
                            </Item>
                            <Item>
                                <Text onPress={handleLoginPress} style={styles.alignText}>Already have an account?</Text>
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
};