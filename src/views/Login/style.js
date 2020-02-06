import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { PRIMARY, SECONDARY, WHITE } from '../../consts'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: height / 10,
    marginBottom: height / 10
  },
  gridBtn: {
    backgroundColor: 'red',
    height: 0
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  btnLogin: {
    width: width / 2.5,
    justifyContent: 'center',
    marginTop: 10
  },
  googleBtn: {
    marginTop: 20,
    width: width / 3.1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  redirecURLText: {
    marginTop: 20,
    textDecorationLine: 'underline',
    color: SECONDARY
  },
  facebookBtn: {
    marginTop: 20,
    width: width / 3.1,
    justifyContent: 'center',
    backgroundColor: '#3b5998'
  },
  googleIcon: {
    width: 30,
    height: 30
  },
  itemInput: {
    width: width / 1.2,
    borderBottomWidth: 0,
    marginBottom: 10
  },
  btnFooter: {
    backgroundColor: SECONDARY
  },
  labelQuestion: {
    width,
    textAlign: 'center',
    color: PRIMARY,
    marginBottom: 5
  },
  textBtnFooter: {
    color: WHITE
  }
})
