import React, { useEffect, useState } from 'react'
import { Container, Content, Text, Item, Button, Thumbnail } from 'native-base'
import { Image } from 'react-native'

import { USER_INFO, GROUPS_ICON, EVENTS_ICON, NAVIGATE_ICON, PROFIL_ICON, CONFIGURATION_ICON, PROFILE, GROUPS, MAPS, EVENT } from '../../consts'
import { getItem } from '../../utils/storage'

import styles from './style'

const LOGO_OFICIAL = require('../../../assets/onmyway-logo.png')

function Home ({ navigation }) {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(
    () => {
      if (!userInfo) {
        loadUserInfo()
      }
    },
    [userInfo]
  )

  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO)
    userInfo = JSON.parse(userInfo)
    console.log(userInfo)
    setUserInfo(userInfo)
  }

  // REDIRECT'S
  const handleRedirectConfiguration = () => {
    // navigation.navigate(GROUPS);
    alert('Sorry, we are working on it.')
  }

  const handleRedirectMaps = () => {
    navigation.navigate(MAPS)
  }

  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Item style={styles.itemMenu}>
          <Button style={styles.btnContainer} light onPress={() => { navigation.navigate(GROUPS) }}>
            <Image source={GROUPS_ICON} style={styles.googleIcon} />
            <Text>GROUPS</Text>
          </Button>

          <Button style={styles.btnContainer} light onPress={() => { navigation.navigate(EVENT) }}>
            <Image source={EVENTS_ICON} style={styles.googleIcon} />
            <Text>EVENTS</Text>
          </Button>
        </Item>
        <Item style={styles.itemMenu} onPress={handleRedirectConfiguration}>
          <Button
            style={styles.btnContainer} light
            onPress={handleRedirectMaps}
          >
            <Image source={NAVIGATE_ICON} style={styles.googleIcon} />
            <Text>NAVIGATE</Text>
          </Button>

          <Button style={styles.btnContainer} light onPress={() => { navigation.navigate(PROFILE) }}>
            <Image source={PROFIL_ICON} style={styles.googleIcon} />
            <Text>PROFILE</Text>
          </Button>
        </Item>
        <Item style={styles.itemMenu}>
          <Button style={styles.btnContainer} light onPress={handleRedirectConfiguration}>
            <Image source={CONFIGURATION_ICON} style={styles.googleIcon} />
            <Text>CONFIGURATION</Text>
          </Button>
        </Item>
      </Content>
    </Container>
  )
}

function HeaderRight ({ action }) {
  const [photoUrl, setPhotoUrl] = useState(null)

  useEffect(
    () => {
      if (!photoUrl) {
        loadUserInfo()
      }
    },
    [photoUrl]
  )

  const loadUserInfo = async () => {
    let userInfo = await getItem(USER_INFO)
    userInfo = JSON.parse(userInfo)
    console.log('UserInfo2: ', userInfo)
    setPhotoUrl(userInfo.photoUrl)
  }

  return (
    <Button onPress={action} transparent>
      <Thumbnail source={{ uri: photoUrl }} small />
    </Button>
  )
}

Home.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => <Image source={LOGO_OFICIAL} style={{ resizeMode: 'contain', width: '60%' }} />,
    headerRightContainerStyle: {
      paddingRight: 10
    },
    headerRight: <HeaderRight action={() => navigation.navigate(PROFILE)} />
  }
}

export default Home
