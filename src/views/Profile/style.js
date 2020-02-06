import { StyleSheet, Dimensions } from 'react-native'
import { PRIMARY, SECONDARY } from '../../consts'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  content: {
    flex: 1
  },
  imageContainer: {
    flex: 1,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 12
  },
  profileImage: {
    width: width / 3,
    height: width / 3
  },
  logoutBtn: {
    backgroundColor: SECONDARY,
    marginTop: 12
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  returnSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
