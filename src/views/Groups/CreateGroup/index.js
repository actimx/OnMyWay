import React, { useState } from 'react'
import {
  Root, Container, Content, Thumbnail, Button, Form, Item,
  Label, Input, Text, Title, Subtitle, ActionSheet, View, Grid
} from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TOKEN_LARAVEL_MACACAR96 } from '../../../consts'
import styles from './style'

function CreateGroup ({ navigation }) {
  // const solid_iconFontAwesome5Images = <FontAwesome5 name='images' solid />
  // const solid_iconFontAwesomeCamera = <FontAwesome name='camera' solid />

  // const imgDefault = {
  //   image: ''
  // }

  const [imageSelect, onChangeImage] = useState('https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png')
  const [imageSelectBase64, setImageSelectBase64] = useState(null)
  const [groupName, onChangeGroupName] = useState('')
  // let { image } = img;

  var BUTTONS = [
    {
      text: 'Gallery',
      icon: 'images',
      iconColor: '#2c8ef4',
      handler: (typeAction) => {
        actionSheetPress(typeAction)
      }
    },
    {
      text: 'Take photo',
      icon: 'camera',
      iconColor: '#f42ced',
      handler: (typeAction) => {
        actionSheetPress(typeAction)
      }
    },
    {
      text: 'Cancel',
      icon: 'close',
      iconColor: '#FF0000',
      handler: (typeAction) => {
        actionSheetPress(typeAction)
      }
    }
  ]

  var DESTRUCTIVE_INDEX = 3
  var CANCEL_INDEX = 4

  // Permissions
  // () => {
  //     getPermissionAsync();
  //     console.log('hi');
  // }

  const getPermissionCameraRoll = async () => {
    // if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    console.log('CameraRoll Status: ', status)
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return false
    }
    return true
    // }
  }

  const getPermissionTakePhoto = async () => {
    // if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    console.log('TakePhoto Status: ', status)
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!')
      return false
    }
    return true
    // }
  }

  const pickImage = async () => {
    const isAllowed = await getPermissionCameraRoll()
    console.log('isAllowed: ', isAllowed)
    if (!isAllowed) return

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
    })

    console.log(result)

    if (!result.cancelled) {
      // img = { image: result.uri };
      onChangeImage(result.uri)
      setImageSelectBase64(result.base64)
      // alert(result.uri);
    }
  }

  const pickImageCamera = async () => {
    const isAllowed = await getPermissionTakePhoto()
    console.log('isAllowed: ', isAllowed)
    if (!isAllowed) return

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
    })

    if (!result.cancelled) {
      onChangeImage(result.uri)
      setImageSelectBase64(result.base64)
      console.log(result.base64)
    }
  }

  // onPress ActionSheet
  const handleActionSheetPress = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        title: 'Select photo'
      },
      buttonIndex => {
        const datos = BUTTONS[buttonIndex]

        if (datos != null) {
          datos.handler(datos.text)
        } else {

        }
      }
    )
  }

  // onPress options ActionSheet
  const actionSheetPress = (typeAction) => {
    console.log('Type: ' + typeAction)

    if (typeAction === 'Gallery') {
      // alert('Option One: ' + typeAction);
      pickImage()
    } else if (typeAction === 'Take photo') {
      // alert('Option Two: ' + typeAction);
      pickImageCamera()
    } else {
      // alert('Option Three: ' + typeAction);
    }
  }

  const handleRegisterGroupPressAPI = async () => {
    try {
      const response = await fetch(
        'https://onmyway69.herokuapp.com/api/groups', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: TOKEN_LARAVEL_MACACAR96
          },
          body: JSON.stringify({
            user_id: '111',
            name: groupName,
            photo: imageSelectBase64
          })
        })

      const responseJson = await response.json()
      if (responseJson.result) {
        navigation.goBack()
      } else {
        alert(responseJson.errors)
        return false
      }
      return responseJson
    } catch (error) {
      console.error(error)
      return false
    }
  }

  // const handleBackPress = () => {
  //   navigation.goBack()
  //   // navigation.navigate(GROUPS);
  // }

  return (
    <Root>
      <Container>
        <Content contentContainerStyle={styles.Contents}>
          <View style={styles.view}>
            <Form>
              <Grid style={styles.from}>
                <Grid onPress={handleActionSheetPress}>
                  <Thumbnail large source={{ uri: imageSelect }} />
                </Grid>

                <Item floatingLabel style={styles.item}>
                  <Label>Group name:</Label>
                  <Input onChangeText={(groupName) => onChangeGroupName(groupName)} value={groupName} />
                </Item>

              </Grid>
              <View style={styles.viewNote}>
                <Text style={styles.textNote}>Provide the group name and an icon (optional)</Text>
              </View>
              <View style={styles.view}>
                <Button block style={styles.button} onPress={handleRegisterGroupPressAPI}>
                  <Text>Create</Text>
                </Button>
              </View>
            </Form>
          </View>
        </Content>
      </Container>
    </Root>
  )
}

const CustomHeader = ({ title, subtitle }) => (
  <View>
    <Title style={{ fontWeight: 'bold', color: '#FFFFFF' }}>{title}</Title>
    <Subtitle style={{ color: '#FFFFFF', paddingLeft: 0, textAlign: Constants.platform.android ? 'left' : 'center' }}>{subtitle}</Subtitle>
  </View>
)

CreateGroup.navigationOptions = () => {
  return {
    headerTitle: <CustomHeader title='Create Group' subtitle='New group' />
  }
}

export default CreateGroup
