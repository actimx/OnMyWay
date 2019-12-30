import React from "react";
import { Image } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { Container, Footer, FooterTab, Content, Grid, Form, Input, Label, Item, Icon, Button, Text, Body  } from 'native-base';

import style from './style';
import enviroment from "../../../enviroment";
import { saveItem } from "../../utils/storage";
import { ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE, HOME, SIGNIN } from "../../consts";

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

export default function Login({navigation}) {

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
                    navigation.navigate(HOME);
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
                    <Text style={style.subtitle}>Login to continue</Text>
                    
                    <Item style={style.itemInput}>
                        <Icon active name='person' />
                        <Input placeholder='E-mail'/>
                    </Item>
                    <Item style={style.itemInput}>
                        <Icon active name='key' />
                        <Input placeholder='Password' secureTextEntry={true}/>
                    </Item>
                    <Button style={style.loginBtn} light>
                        {/* <Image source={SUCCES_ICON} style={style.googleIcon}/> */}
                        <Text>LOG IN</Text>
                    </Button>
                    <Text style={{ fontSize:12, color: 'blue', textDecorationLine: 'underline', marginTop:15 }}>Did you forget your password?</Text> 
                    <Item style={{ marginTop:20 }}>
                        <Text >Login with</Text>
                    </Item>

                    <Button style={style.googleBtn} light
                        onPress={handleLoginPress}
                        >
                        <Image source={GOOGLE_IMAGE} style={style.googleIcon}/>
                    </Button>
                    <Button style={style.facebookBtn} light>
                        <Image source={FACEBOOK_IMAGE} style={style.googleIcon}/>
                    </Button>
               </Grid>
                    
            </Content>
            <Footer>
                <FooterTab>
                    <Button full 
                        onPress={() => {
                            navigation.navigate(SIGNIN);
                        }}>
                    <Text>Sign in</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};