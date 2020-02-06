import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { PRIMARY } from '../../consts'

export default StyleSheet.create({
  header: {
    backgroundColor: PRIMARY,
    marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
  },
  content: {
    display: 'flex'
  },
  googleIcon: {
    width: 50,
    height: 50,
    marginBottom: 30
  },
  bodyItem: {
    marginTop: 5
  },
  loadingGroups: {
    display: 'flex',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
