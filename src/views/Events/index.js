import React from 'react'
import {
  Container, Content, Button, Icon
} from 'native-base'

import { CREATE_EVENT } from '../../consts'

import styles from './style'

import ListEvents from '../../components/ListEvents'

function Events ({ navigation }) {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <ListEvents />
      </Content>
    </Container>

  )
};

Events.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Events',
    headerRight: () => (
      <>
        <Button transparent onPress={() => console.log('Go to search event')}>
          <Icon name='search' style={{ color: '#FFFFFF' }} />
        </Button>
        <Button transparent onPress={() => navigation.navigate(CREATE_EVENT)}>
          <Icon name='add' style={{ color: '#FFFFFF' }} />
        </Button>
      </>
    )
  }
}

export default Events
