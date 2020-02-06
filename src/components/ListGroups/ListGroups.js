import React from 'react'
import { connect } from 'react-redux'
import { FlatList, StyleSheet } from 'react-native'
import { ListItem, Thumbnail, Text, View, Left, Body } from 'native-base'
// import { CREATE_GROUP, SEARCH_GROUP, PRIMARY_DARK, SINGRUPOS_ICON, TOKEN_LARAVEL_MACACAR96 } from '../../consts'
import { SearchBar } from 'react-native-elements'

class ListGroups extends React.Component {
  constructor (props) {
    super(props)
    console.log('ListGroups State Props')
    console.log(props)
    this.groupsData = props.groups.data

    this.state = {
      loading: false,
      data: this.groupsData,
      error: null,
      query: '',
      fullData: this.groupsData
    }
  }

    handleSearchFilterFunction = text => {
      // console.log('SearchFilterFunction')
      // console.log(this.state.fullData)
      const textData = text.toUpperCase()
      // console.log(textData)
      const newData = this.state.fullData.filter(item => {
        const itemData = `${item.name.toUpperCase()}`
        // console.log(itemData.indexOf(textData) > -1)
        return itemData.indexOf(textData) > -1
      })
      // console.log(newData)

      this.setState({
        data: newData,
        query: text
      })
    };

    renderHeader = () => {
      return (
        <SearchBar
          placeholder='Type Here...'
          lightTheme
          showLoading
          round
          onChangeText={this.handleSearchFilterFunction}
          value={this.state.query}
        />
      )
    };

    render () {
      return (
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem avatar onPress={() => console.log('Ir al grupo')} style={styles.listGroups}>
                <Left>
                  <Thumbnail source={{ uri: item.photo ? `data:image/gif;base64,${item.photo}` : 'https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png' }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note> 0 users...</Text>
                </Body>
              </ListItem>
            )}
            keyExtractor={(item, index) => '' + index}
            ListHeaderComponent={this.props.showSearchGroups ? this.renderHeader : null}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  loadingGroups: {
    marginTop: 20,
    alignItems: 'center'
  },
  viewGroups: {
    flexDirection: 'row',
    margin: 10
  },
  viewGroupsImage: {
    marginRight: 15
  },
  imageGroup: {
    width: 80,
    height: 80
  },
  groupName: {
    fontWeight: 'bold'
  },
  groupTotalUsers: {
    paddingTop: 2,
    color: 'grey'
  },
  listGroups: {
    /* alignItems: "center", */
  }
})

const mapStateToProps = state => {
  console.log('state')
  console.log(state)
  const { showSearchGroups } = state
  console.log(showSearchGroups)
  return { showSearchGroups }
}

export default connect(mapStateToProps)(ListGroups)
