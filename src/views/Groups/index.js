import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Button, Icon, Title, Subtitle, View } from 'native-base'
import { CREATE_GROUP, TOKEN_LARAVEL_MACACAR96 } from '../../consts'
import styles from './style'
import ListGroups from '../../components/ListGroups/ListGroups'
import { useSelector, useDispatch } from 'react-redux'
import { settotalgroups, showsearchgroups } from '../../redux/app'

function Groups () {
  // const [idUser, setIdUser] = useState('111')
  const [groupsPrepare, setGroupsPrepare] = useState({ data: [] })
  const [groups, setGroups] = useState({ data: [] })
  // const [startGroups, setStartGroups] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const limitGroups = 8
  // const [dataAPI, setDataAPI] = useState(null)

  const dispatch = useDispatch()
  const setTotalGroups = qty => dispatch(settotalgroups(qty))

  useEffect(() => {
    console.log('Consultando API')
    loadData()
  }, [groupsPrepare])

  const loadData = async () => {
    try {
      const response = await fetch('https://onmyway69.herokuapp.com/api/groups/111', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: TOKEN_LARAVEL_MACACAR96
        }
      })
      const responseJson = await response.json()

      if (groupsPrepare.data.length !== 0) {
        setTotalGroups(groupsPrepare.data.length)
        setGroups(groupsPrepare)
      } else {
        setGroupsPrepare({ data: responseJson.group_information })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
  // <Container>
  //     <Content contentContainerStyle={styles.content}>
    groups.data.length
      ? <ListGroups groups={groups} />
      : <View style={styles.loadingGroups}><ActivityIndicator size='large' color='#0000ff' /></View>

  //     </Content>
  // </Container>
  )
}

const CustomHeader = ({ title }) => {
  const totalGroups = useSelector(state => state.totalGroups)

  return (
    <View style={styles.headerContainer}>
      <Title style={{ fontWeight: 'bold', color: '#FFFFFF' }}>{title}</Title>
      {totalGroups
        ? <Subtitle style={{ color: '#FFFFFF' }}>{totalGroups} groups</Subtitle>
        : <Subtitle style={{ color: '#FFFFFF' }}>Loading...</Subtitle>}
    </View>
  )
}

const CloseButton = ({ action }) => (
  <Button transparent onPress={() => action()}>
    <Icon name='close' style={{ color: '#FFFFFF' }} />
  </Button>
)

const ActionButtons = ({ searchAction, navigationAction }) => (
  <>
    <Button transparent onPress={() => searchAction()}>
      <Icon name='search' style={{ color: '#FFFFFF' }} />
    </Button>
    <Button transparent onPress={() => navigationAction()}>
      <Icon name='add' style={{ color: '#FFFFFF' }} />
    </Button>
  </>
)

const CustomRight = ({ navigationAction }) => {
  const dispatch = useDispatch()
  const showSearchGroups = show => dispatch(showsearchgroups(show))
  const isSearchGroupVisible = useSelector(state => state.showSearchGroups)
  console.log('isSearchGroupVisible: ', isSearchGroupVisible)

  return (
    isSearchGroupVisible
      ? <CloseButton action={() => showSearchGroups(false)} />
      : <ActionButtons searchAction={() => showSearchGroups(true)} navigationAction={() => navigationAction()} />
  )
}

Groups.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: <CustomHeader title='Groups' />,
    headerRight: <CustomRight navigationAction={() => navigation.navigate(CREATE_GROUP)} />
  }
}

export default Groups
