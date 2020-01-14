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
                            <Text style={styles.title} >R E G I S T E R</Text>

                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Name:</Text>
                                <Input style={styles.colorFontTxt} placeholder="Type your name"
                                    onChangeText={(name) => onChangeName(name)}
                                    value={name} placeholderTextColor={WHITE} />
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Last name:</Text>
                                <Input style={styles.colorFontTxt} placeholder="Type your last name" placeholderTextColor={WHITE} />
                                {/* <Input style={styles.colorFontTxt} placeholder="Type your last name" placeholderTextColor={WHITE}
                                    onChangeText={(last_name) => onChangeLastName(last_name)}
                                    value={last_name} placeholderTextColor={WHITE} /> */}
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Email address:</Text>
                                <Input style={styles.colorFontTxt} placeholder='Enter your e-mail'
                                    onChangeText={(email) => onChangeEmail(email)}
                                    value={email} placeholderTextColor={WHITE} />
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Password:</Text>
                                <Input style={styles.colorFontTxt} placeholder="Enter a password"
                                    placeholderTextColor={WHITE}
                                    onChangeText={(password) => onChangePassword(password)}
                                    value={password}
                                    secureTextEntry={true} />
                            </Item>
                            <Item style={styles.input}>
                                <Text style={styles.labelText}>Confirm Password:</Text>
                                <Input style={styles.colorFontTxt} placeholder="Confirm your password" placeholderTextColor={WHITE} />
                            </Item>
                            <Item>
                                <Button primary
                                    onPress={register}>
                                    <Text>Create Account</Text>
                                </Button>
                            </Item>
                            <Item>
                                <Text onPress={handleLoginPress} style={styles.alignText}>Already have an account?</Text>
                                <Input style={styles.colorFontTxt} />
                            </Item>

                        </Item>
                    </ScrollView>
                </ImageBackground>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full
                        onPress={handleLoginPress}>
                        <Text style={styles.textBtnFooter}>Log in</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
        // </ScrollView>
    );
};