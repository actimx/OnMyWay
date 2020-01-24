import React from 'react';
import { Container, Content, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
import styles from "./style";

export default function SearchGroup({navigation}){

  const handleBackPress = () => {
      navigation.goBack();
  };

  return (
    <Container>
      <Header searchBar rounded style={styles.header}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content>
        <View style={styles.view}>
          <Button block style={styles.button1} onPress={handleBackPress}>
            <Text>Back</Text>
          </Button>
        </View>
        
      </Content>
    </Container>
  );
}