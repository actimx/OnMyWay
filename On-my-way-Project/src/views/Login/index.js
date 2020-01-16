import React from "react";
import { Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { Container, Footer, FooterTab, Content, Grid, Spinner, Input, Label, Item, Icon, Button, Text, Body } from 'native-base';

import Expo from "expo";

import style from './style';
import enviroment from "../../../enviroment";
import { saveItem } from "../../utils/storage";
import { ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE, HOME, IDENTIFICADOR_APP_FACEBOOK, REGISTER } from "../../consts";

import aut from "../../utils/aut";

const GOOGLE_IMAGE = require('../../../assets/google-icon.png');
const FACEBOOK_IMAGE = require('../../../assets/facebook-icon.png');
const LOGO_OFICIAL = require('../../../assets/onmyway-logo.png');
// const SUCCES_ICON = require('../../../assets/log-in-icon.png');
const {
    iosClientId,
    androidClientId,
    iosStandaloneAppClientId,
    androidStandaloneAppClientId
} = enviroment();

export default function Login({ navigation }) {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    login = async () => {

        try {
            let response = await fetch(
                `https://onmyway69.herokuapp.com/api/auth/login?username=${email}&password=${password}`, {
                method: 'POST'
            });

            let responseJson = await response.json();
            if (responseJson.access_token) {
                let access_token = responseJson.access_token;
                let user = {
                    email: email,
                    name: "ejemplo" //Falta que la peticion me traiga el nombre del usuario logueado
                }

                const userResult = await saveItem(USER_INFO, JSON.stringify(user));
                const tokenResult = await saveItem(ACCESS_TOKEN, access_token);

                if (userResult && tokenResult) {
                    navigation.navigate(HOME);
                } else {
                    alert('Error al iniciar sesión');
                }
            } else {
                alert(responseJson);
                return false;
            }
            return responseJson;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const handleLoginPress = async () => {
        try {
            const { user, accessToken, type } = await Google.logInAsync({
                iosClientId,
                androidClientId,
                iosStandaloneAppClientId,
                androidStandaloneAppClientId
            });

            if (type === GOOGLE_SUCCESS_MESSAGE) {
                const userResult = await saveItem(USER_INFO, JSON.stringify(user));
                const tokenResult = await saveItem(ACCESS_TOKEN, accessToken);

                if (userResult && tokenResult) {
                    let name = user.name;
                    let email = user.email;

                    // aut.register(name, email, tokenResult, tokenResult);
                    //Le mando el tokenResult por que no tengo acceso a la contraseña de google

                    aut.registerWithoutMessages(name, email, "12345678", "12345678", navigation);
                } else {
                    alert('Error al iniciar sesión');
                }
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };

    return (
        <Container>
            <Content contentContainerStyle={style.content}>
                <Grid style={style.grid}>
                    {/* <Text style={style.title}>Welcome to</Text> */}
                    <Image source={LOGO_OFICIAL} />
                    <Text style={style.title}>Login to continue</Text>

                    <Item style={style.itemInput}>
                        <Icon active name='person' />
                        <Input placeholder='E-mail' onChangeText={(email) => onChangeEmail(email)}
                            value={email} />
                    </Item>
                    <Item style={style.itemInput}>
                        <Icon active name='key' />
                        <Input placeholder='Password' onChangeText={(password) => onChangePassword(password)}
                            value={password}
                            secureTextEntry={true} />
                    </Item>
                    <Button primary style={style.btnLogin}
                        onPress={login}>
                        <Text>LOG IN</Text >
                    </Button>
                    <Text style={style.redirecURLText}>Did you forget your password?</Text>
                    <Item style={{ marginTop: 20 }}>
                        <Text>Login with</Text>
                    </Item>

                    <Button style={style.googleBtn} light
                        onPress={handleLoginPress}
                    >
                        <Image source={GOOGLE_IMAGE} style={style.googleIcon} />
                    </Button>
                    {/* <Button style={style.facebookBtn} light
                        onPress={handleLoginFacebookPress}
                        <Image source={FACEBOOK_IMAGE} style={style.googleIcon} />
                    </Button> */}
                </Grid>

            </Content>
            <Footer>
                <FooterTab>
                    <Button full
                        onPress={() => { navigation.navigate(REGISTER) }}>
                        <Text style={style.textBtnFooter}>Sign in</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};