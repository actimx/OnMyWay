import React from "react";
import { Container, Content, Text, View, Grid, Form, Item, Input, Button, Footer, FooterTab } from "native-base";
import { ImageBackground, Image, ScrollView } from "react-native";

import styles from "./style";
import { saveItem } from "../../utils/storage";
import { RegisterBackground, LOGO, WHITE, SECONDARY, LOGIN, ACCESS_TOKEN, USER_INFO, HOME } from '../../consts';

export default function Register({ navigation }) {

    const [name, onChangeName] = React.useState('ejemplo');
    const [email, onChangeEmail] = React.useState('ejemplo@ejemplo.com');
    const [password, onChangePassword] = React.useState('12345678');
    const [c_password, onChangeConfirmPassword] = React.useState('12345678');

    register = async () => {
        try {
            let response = await fetch(
                `https://onmyway69.herokuapp.com/api/auth/register?name=${name}&email=${email}&password=${password}&c_password=${c_password}`, {
                method: 'POST'
            });

            let responseJson = await response.json();
            if (responseJson.access_token) {
                alert("Se registro correctamente");
                let access_token = responseJson.access_token;

                let user = {
                    email: email,
                    name: name
                }

                const userResult = await saveItem(USER_INFO, JSON.stringify(user));
                const tokenResult = await saveItem(ACCESS_TOKEN, access_token);

                if (userResult && tokenResult) {
                    navigation.navigate(HOME);
                } else {
                    alert('Error al realizar registro');
                }

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
                                <Input style={{ color: WHITE }} placeholder="Confirm your password"
                                    placeholderTextColor={SECONDARY}
                                    onChangeText={(c_password) => onChangeConfirmPassword(c_password)}
                                    value={c_password}
                                    secureTextEntry={true} />
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