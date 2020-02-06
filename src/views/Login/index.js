import React, { useState } from 'react'
import { Image } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { Container, Content, Grid, Item, Button, Text } from 'native-base'

// React Native Elements
import { Input, Icon, SocialIcon } from 'react-native-elements'

import style from './style'
import enviroment from '../../../enviroment'
import { saveItem } from '../../utils/storage'
import { ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE, HOME, REGISTER } from '../../consts'

import aut from '../../utils/aut'

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
  const [isLoginLoading, setIsLoginLoading] = useState(false)

  const login = async () => {
    setIsLoginLoading(true)
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
          setIsLoginLoading(false)
          navigation.navigate(HOME)
        } else {
          setIsLoginLoading(false)
          alert('Error al iniciar sesión')
        }
      } else {
        alert(responseJson)
        setIsLoginLoading(false)
        return false
      }
      return responseJson
    } catch (error) {
      console.error(error)
      setIsLoginLoading(false)
      return false
    }
  }

  const handleLoginPress = async () => {
    setIsLoginLoading(true)
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

          const isSuccess = await aut.registerWithoutMessages(name, email, '12345678', '12345678', navigation)
          if (isSuccess) {
            setIsLoginLoading(false)
            navigation.navigate(HOME)
          }
        } else {
          setIsLoginLoading(false)
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

          <SocialIcon
            title='Sign In With Google'
            button
            type='google'
            onPress={handleLoginPress}
            style={{ padding: 16, marginTop: 32 }}
            loading={isLoginLoading}
          />
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
