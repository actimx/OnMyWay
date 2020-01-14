import React, {useState, useEffect} from "react";
import { Image } from "react-native";
import {
    Container, 
    Content,
    List,
    ListItem,
    Thumbnail, 
    Header, 
    Left, 
    Body, 
    Right, 
    Button, 
    Icon, 
    Text, 
    Title,
    Subtitle,
    View,
    Item} from "native-base";
import { CREATE_GROUP, SEARCH_GROUP, PRIMARY_DARK, SINGRUPOS_ICON } from "../../consts";
import styles from "./style";

export default function Groups({ navigation }) {

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleCreateGroupPress = () => {
        navigation.navigate(CREATE_GROUP);
    }

    const hanhleSearchGroupPress = () => {
        navigation.navigate(SEARCH_GROUP);
    }

    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={handleBackPress}>
                        <Icon name='arrow-back'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Groups</Title>
                    <Subtitle>0 groups</Subtitle>
                </Body>
                <Right>
                    <Button transparent onPress={hanhleSearchGroupPress}>
                        <Icon name='search' />
                    </Button>
                    <Button transparent onPress={handleCreateGroupPress}>
                        <Icon name='add' />
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={styles.content}>

                <Item style={{flexDirection: 'column', borderBottomWidth: 0}}>
                    <Image source={SINGRUPOS_ICON} style={styles.googleIcon} />
                    <Text style={{color: PRIMARY_DARK}}>There are no groups at the moment.</Text>
                </Item>

                {/* <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png' }} />
                        </Left>
                        <Body>
                            <Text>Group One</Text>
                            <Text note>25 users added</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://www.todoautos.com.pe/portal/images/stories/tokyo_auto_salon.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Group Two</Text>
                            <Text note>12 users added</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png' }} />
                        </Left>
                        <Body>
                            <Text>Group Three</Text>
                            <Text note>5 users added</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_960_720.png' }} />
                        </Left>
                        <Body>
                            <Text>Group For</Text>
                            <Text note>16 users added</Text>
                        </Body>
                    </ListItem>
                </List>
            */}
            </Content>
        </Container>
    );
}