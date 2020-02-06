import React from 'react'
import {
  Container, Content, Text
} from 'native-base'

// import { NOTFOUND_ICON, CREATE_EVENT } from '../../consts'

import styles from './style'
import { withNavigation } from 'react-navigation'

export function ListEvent ({ navigation }) {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Text>Lista de eventos</Text>
      </Content>
    </Container>
  )
}

export default withNavigation(ListEvent)
