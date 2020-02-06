import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Button, Icon } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'

import { CREATE_EVENT } from '../../consts'
import { showsearchevents } from '../../redux/app'

import styles from './style'
import { TOKEN_LARAVEL_MACACAR96 } from '../../consts/index'

import ListEvents from '../../components/ListEvents'

function Events ({ navigation }) {
  const [events, setEvents] = useState({ data: [] })

  useEffect(() => {
    console.log('Consultando API')
    loadData()
  }, [setEvents])

  const loadData = async () => {
    try {
      const response = await fetch('https://onmyway69.herokuapp.com/api/events', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: TOKEN_LARAVEL_MACACAR96
        }
      })

      const responseJson = await response.json()
      console.log(responseJson)
      console.log(responseJson.events)

      if (responseJson.events.length !== 0) {
        setEvents(responseJson.events)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    events.length
      ? <ListEvents data={events} />
      : <View style={styles.loadingEvents}><ActivityIndicator size='large' color='#0000ff' /></View>
  )
  // return (
  //   <View style={styles.loadingEvents}><ActivityIndicator size='large' color='#0000ff' /></View>
  // )
};

const CloseButton = ({ action }) => (
  <Button transparent onPress={() => action()}>
    <Icon name='close' style={{ color: '#FFFFFF' }} />
  </Button>
)

const CustomRight = ({ navigationAction }) => {
  const dispatch = useDispatch()
  const showSearchEvents = show => dispatch(showsearchevents(show))
  const isSearchEventsVisible = useSelector(state => state.showSearchEvents)

  return (
    isSearchEventsVisible
      ? <CloseButton action={() => showSearchEvents(false)} />
      : (
        <>
          <Button transparent onPress={() => showSearchEvents(true)}>
            <Icon name='search' style={{ color: '#FFFFFF' }} />
          </Button>
          <Button transparent onPress={() => navigationAction()}>
            <Icon name='add' style={{ color: '#FFFFFF' }} />
          </Button>
        </>
      )
  )
}

Events.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Events',
    headerRight: <CustomRight navigationAction={() => navigation.navigate(CREATE_EVENT)} />
  }
}

export default Events
