import React, {useState, useEffect} from "react";
import {
    Root, Container, Content, Header, Thumbnail, Left, Body, Right, Button, 
    Icon, Form, Item, Label, Input, Text, Title, Subtitle, ActionSheet,
    View, Grid } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TOKEN_LARAVEL_MACACAR96, GROUPS } from "../../../consts";
import styles from "./style";


export default function CreateGroup({ navigation }) {

    const solid_iconFontAwesome5Images = <FontAwesome5 name={'images'} solid/>;
    const solid_iconFontAwesomeCamera = <FontAwesome name={'camera'} solid/>;

    imgDefault = {
        image: "",
    };

    let [imageSelect, onChangeImage] = useState("https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png");

    //let { image } = img;

    var BUTTONS = [
        { 
            text: "Gallery", 
            icon: "images", 
            iconColor: "#2c8ef4",
            handler: (typeAction) => {
                actionSheetPress(typeAction);
            }
          
        },
        { 
            text: "Take photo", 
            icon: "camera", 
            iconColor: "#f42ced",
            handler: (typeAction) => {
                actionSheetPress(typeAction);
            }
        },
        { 
            text: "Cancel", 
            icon: "close", 
            iconColor: "#FF0000",
            handler: (typeAction) => {
                actionSheetPress(typeAction);
            }
        }
      ];
    
    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;

    // Permissions
    () => {
        getPermissionAsync();
        console.log('hi');
    }

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
          base64: true
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            //img = { image: result.uri };
            onChangeImage(result.uri);
          //alert(result.uri);
        }
    };

    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
          base64: true
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            //img = { image: result.uri };
            onChangeImage(result.uri);
          //alert(result.uri);
        }
    };


    // inputs
    const [groupName, onChangeGroupName] = useState("");

    // onPress ActionSheet
    const handleActionSheetPress = () => {
        ActionSheet.show(
            {
            options: BUTTONS,
            cancelButtonIndex: CANCEL_INDEX,
            destructiveButtonIndex: DESTRUCTIVE_INDEX,
            title: "Select photo"
            },
            buttonIndex => {

                let datos = BUTTONS[buttonIndex];

                if (datos != null){
                    datos.handler(datos.text);
                } else {

                }
                
            }
        );
    }

    // onPress options ActionSheet
    const actionSheetPress = (typeAction) => {
        console.log('Type: ' + typeAction);

        if (typeAction == 'Gallery') {
            //alert('Option One: ' + typeAction);
            pickImage();
        } else if (typeAction == 'Take photo') {
            //alert('Option Two: ' + typeAction);
            pickImageCamera();
        } else {
            //alert('Option Three: ' + typeAction);
        }

    }
    

    const handleRegisterGroupPressAPI = async () => {
        try {
            let response = await fetch(
                'https://onmyway69.herokuapp.com/api/groups', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': TOKEN_LARAVEL_MACACAR96,
                },
                body: JSON.stringify({
                    user_id: '111',
                    name: groupName,
                    photo: 'Avatar',
                }),
            });

            let responseJson = await response.json();
            if (responseJson.result) {
                navigation.goBack();
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

    const handleBackPress = () => {
        //navigation.goBack();
        navigation.navigate(GROUPS);
    };

    return (
        <Root>
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={handleBackPress}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Create Group</Title>
                    <Subtitle>New group</Subtitle>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={styles.Contents}>
                <View style={styles.view}>
                    <Form>
                        <Grid style={styles.from}>
                            <Grid onPress={handleActionSheetPress}>
                                <Thumbnail large source={{uri: imageSelect}} />
                            </Grid>
                            
                            <Item floatingLabel style={styles.item}>
                                <Label>Group name:</Label>
                                <Input onChangeText={(groupName) => onChangeGroupName(groupName)} value={groupName}/>
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
    );
}