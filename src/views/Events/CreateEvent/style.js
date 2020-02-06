import { StyleSheet, Dimensions } from 'react-native'
import { PRIMARY } from '../../../consts'
import Constants from 'expo-constants'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  header: {
    backgroundColor: PRIMARY
    // marginTop: Constants.platform.android ? Constants.statusBarHeight : 0
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  },

  justifyContainerItem: {
    borderBottomWidth: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  sectionItem: {
    borderBottomWidth: 0,
    width: width - 30,
    marginBottom: 25,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  sectionItemDatepicker: {
    borderBottomWidth: 0,
    width: width - 30,
    marginBottom: 25,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  subSectionItemDatepicker: {
    width: width / 2.5
  },
  datepicker: {
    display: 'flex',
    alignItems: Constants.platform.android ? 'center' : 'baseline'
  },
  labelText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: PRIMARY,
    marginBottom: 5
  }
})
