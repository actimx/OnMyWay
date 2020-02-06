import React, { useState } from 'react'
import { withNavigation } from 'react-navigation'
import { FlatList } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import { useSelector } from 'react-redux'

const keyExtractor = (item) => item.id.toString()

const renderItem = ({ item }) => (
  <ListItem
    title={item.details}
    subtitle={item.id.toString()}
    bottomDivider
    chevron
  />
)

const handleSearchFilterFunction = (text, setEventsData, setQuery, fullData) => {
  const textData = text.toUpperCase()
  const newData = fullData.filter(item => {
    const itemData = `${item.details.toUpperCase()}`
    return itemData.indexOf(textData) > -1
  })

  setEventsData(newData)
  setQuery(text)
}

const renderHeader = (fullData, setEventsData, query, setQuery) => (
  <SearchBar
    placeholder='Type Here...'
    lightTheme
    showLoading
    round
    onChangeText={text => handleSearchFilterFunction(text, setEventsData, setQuery, fullData)}
    value={query}
  />
)

export function ListEvent ({ data }) {
  const showSearchEvents = useSelector(state => state.showSearchEvents)
  const [query, setQuery] = useState('')
  const [eventsData, setEventsData] = useState(data)
  const [fullData] = useState(data)

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={eventsData}
      renderItem={renderItem}
      ListHeaderComponent={showSearchEvents ? renderHeader(fullData, setEventsData, query, setQuery) : null}
    />
  )
}

export default withNavigation(ListEvent)
