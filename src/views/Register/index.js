import React, { useState } from 'react'
import { Container, Content, Text, Item, Button, Footer, FooterTab } from 'native-base'
import { ImageBackground, Image, ScrollView } from 'react-native'

// React Native Elements
import { Input, Icon } from 'react-native-elements'

import styles from './style'
// import { saveItem } from "../../utils/storage";
// import { RegisterBackground, LOGO, WHITE, SECONDARY, LOGIN, ACCESS_TOKEN, USER_INFO, HOME } from '../../consts';
import { RegisterBackground, LOGO, WHITE, SECONDARY, LOGIN } from '../../consts'

import aut from '../../utils/aut'

export default function Register ({ navigation }) {
  const [name, onChangeName] = React.useState('')
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')
  const [cpassword, onChangeConfirmPassword] = React.useState('')

  // ocultar y ver pass
  const [hiddePassword, setHiddePassword] = useState(true)
  const [hiddeConfirmPassword, setHiddeConfirmPassword] = useState(true)

  const register = () => {
    aut.register(name, email, password, cpassword, navigation)
  }

  return (
  // <ScrollView>
    <Container>
      <Content contentContainerStyle={styles.content}>
        <ImageBackground source={RegisterBackground} style={styles.imageBackground}>
          <ScrollView>
            <Item style={styles.justifyItem}>
              <Image source={LOGO} />
              <Text style={{ color: WHITE, marginBottom: 50 }}>R E G I S T E R</Text>
              <Item style={styles.input}>
                <Text style={styles.labelText}>Name:</Text>
                <Item regular>
                  <Input
                    style={{ color: WHITE }} placeholder='Type your name'
                    onChangeText={(name) => onChangeName(name)}
                    value={name} placeholderTextColor={SECONDARY}
                  />
                </Item>
              </Item>
              <Item style={styles.input}>
                <Text style={styles.labelText}>Email address:</Text>
                <Item regular>
                  <Input
                    style={{ color: WHITE, borderColor: 'red' }} placeholder='Enter your e-mail'
                    onChangeText={(email) => onChangeEmail(email)}
                    value={email} placeholderTextColor={SECONDARY}
                  />
                </Item>
              </Item>
              <Item style={styles.input}>
                <Text style={styles.labelText}>Password:</Text>
                <Item regular>
                  {/* <Input style={{ color: WHITE }} placeholder="Enter a password"
                                    placeholderTextColor={SECONDARY}
                                    onChangeText={(password) => onChangePassword(password)}
                                    value={password}
                                    secureTextEntry={true} /> */}
                  <Input
                    placeholder='Enter a password' onChangeText={(password) => onChangePassword(password)}
                    placeholderTextColor={WHITE}
                    value={password}
                    secureTextEntry={hiddePassword}
                    rightIcon={
                      <Icon
                        color={WHITE}
                        type='font-awesome'
                        name={hiddePassword ? 'eye' : 'eye-slash'}
                        onPress={() => setHiddePassword(!hiddePassword)}
                      />
                    }
                  />
                </Item>
              </Item>
              <Item style={styles.input}>
                <Text style={styles.labelText}>Confirm Password:</Text>
                <Item regular>
                  {/* <Input style={{ color: WHITE }} placeholder="Confirm your password"
                                    placeholderTextColor={SECONDARY}
                                    onChangeText={(c_password) => onChangeConfirmPassword(c_password)}
                                    value={c_password}
                                    secureTextEntry={true} /> */}
                  <Input
                    placeholder='Confirm your password'
                    onChangeText={(cpassword) => onChangeConfirmPassword(cpassword)}
                    placeholderTextColor={WHITE}
                    value={cpassword}
                    secureTextEntry={hiddeConfirmPassword}
                    rightIcon={
                      <Icon
                        color={WHITE}
                        type='font-awesome'
                        name={hiddeConfirmPassword ? 'eye' : 'eye-slash'}
                        onPress={() => setHiddeConfirmPassword(!hiddeConfirmPassword)}
                      />
                    }
                  />
                </Item>
              </Item>
              <Item style={{ borderBottomWidth: 0 }}>
                <Button
                  style={{ backgroundColor: SECONDARY }}
                  onPress={register}
                >
                  <Text>Create Account</Text>
                </Button>
              </Item>
              <Item>
                <Text onPress={() => { navigation.navigate(LOGIN) }} style={styles.alignText}>Already have an account?</Text>
              </Item>

            </Item>
          </ScrollView>
        </ImageBackground>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            full
            onPress={() => { navigation.navigate(LOGIN) }}
          >
            <Text>Log in</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  // </ScrollView>
  )
};
