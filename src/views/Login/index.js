import React, { useState } from 'react'
import { Image } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { Container, Content, Grid, Item, Button, Text } from 'native-base'

// React Native Elements
import { Input, Icon } from 'react-native-elements'

import style from './style'
import enviroment from '../../../enviroment'
import { saveItem } from '../../utils/storage'
import { ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE, HOME, REGISTER } from '../../consts'

import aut from '../../utils/aut'

const GOOGLE_IMAGE = require('../../../assets/google-icon.png')
const LOGO_OFICIAL = require('../../../assets/onmyway-logo.png')

const {
  iosClientId,
  androidClientId,
  iosStandaloneAppClientId,
  androidStandaloneAppClientId
} = enviroment()

export default function Login ({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')

  const [hiddePassword, setHiddePassword] = useState(true)

  const login = async () => {
    try {
      const response = await fetch(
        `https://onmyway69.herokuapp.com/api/auth/login?username=${email}&password=${password}`, {
          method: 'POST'
        })

      const responseJson = await response.json()
      if (responseJson.access_token) {
        const accessToken = responseJson.access_token
        const user = {
          email: email,
          name: 'ejemplo' // Falta que la peticion me traiga el nombre del usuario logueado
        }

        const userResult = await saveItem(USER_INFO, JSON.stringify(user))
        const tokenResult = await saveItem(ACCESS_TOKEN, accessToken)

        if (userResult && tokenResult) {
          navigation.navigate(HOME)
        } else {
          alert('Error al iniciar sesión')
        }
      } else {
        alert(responseJson)
        return false
      }
      return responseJson
    } catch (error) {
      console.error(error)
      return false
    }
  }

  const handleLoginPress = async () => {
    try {
      const { user, accessToken, type } = await Google.logInAsync({
        iosClientId,
        androidClientId,
        iosStandaloneAppClientId,
        androidStandaloneAppClientId
      })

      if (type === GOOGLE_SUCCESS_MESSAGE) {
        const userResult = await saveItem(USER_INFO, JSON.stringify(user))
        const tokenResult = await saveItem(ACCESS_TOKEN, accessToken)

        if (userResult && tokenResult) {
          const name = user.name
          const email = user.email

          // aut.register(name, email, tokenResult, tokenResult);
          // Le mando el tokenResult por que no tengo acceso a la contraseña de google

          aut.registerWithoutMessages(name, email, '12345678', '12345678', navigation)
        } else {
          alert('Error al iniciar sesión')
        }
      }
    } catch (error) {
      alert('Error: ' + error)
    }
  }

  return (
    <Container>
      <Content contentContainerStyle={style.content}>
        <Grid style={style.grid}>
          <Image source={LOGO_OFICIAL} style={{ marginBottom: 16 }} />
          {/* <Text style={style.title}>Login to continue</Text> */}

          <Item style={style.itemInput}>
            <Input
              placeholder='E-mail' onChangeText={(email) => onChangeEmail(email)}
              value={email}
              allowFontScaling={false}
              rightIcon={
                <Icon
                  type='font-awesome'
                  name='at'
                />
              }
            />
          </Item>
          <Item style={style.itemInput}>
            <Input
              placeholder='Password' onChangeText={(password) => onChangePassword(password)}
              value={password}
              secureTextEntry={hiddePassword}
              rightIcon={
                <Icon
                  type='font-awesome'
                  name={hiddePassword ? 'eye' : 'eye-slash'}
                  onPress={() => setHiddePassword(!hiddePassword)}
                />
              }
            />
            {/* <Icon active name='md-eye-off' /> */}
          </Item>
          <Button
            primary style={style.btnLogin}
            onPress={login}
          >
            <Text>LOG IN</Text>
          </Button>
          {/* <Text style={style.redirecURLText}>Did you forget your password?</Text> */}
          <Item style={{ marginTop: 30 }}>
            <Text>Login with</Text>
          </Item>

          <Button
            style={style.googleBtn} light
            onPress={handleLoginPress}
          >
            <Image source={GOOGLE_IMAGE} style={style.googleIcon} />
          </Button>
          {/* <Button style={style.facebookBtn} light
                        onPress={handleLoginFacebookPress}
                        <Image source={FACEBOOK_IMAGE} style={style.googleIcon} />
                    </Button> */}
        </Grid>
        <Item style={{ borderBottomWidth: 0, flexDirection: 'column', marginBottom: 16 }}>
          <Text style={style.labelQuestion}>¿Do not you have an account yet?</Text>
          <Button
            onPress={() => { navigation.navigate(REGISTER) }}
          >
            <Text style={style.textBtnFooter}>Sign up</Text>
          </Button>
        </Item>

      </Content>
      {/* <Footer>
                <FooterTab>
                    <Button full
                        onPress={() => { navigation.navigate(REGISTER) }}>
                        <Text style={style.textBtnFooter}>Sign in</Text>
                    </Button>
                </FooterTab>
            </Footer> */}
    </Container>
  )
};
