// Action Types
export const SET_TOTAL_GROUPS = 'SET_TOTAL_GROUPS'
export const SEARCH_GROUPS_SHOW = 'SEARCH_GROUPS_SHOW'
export const SHOW_SEARCH_EVENTS = 'SHOW_SEARCH_EVENTS'

// Action Creators
export const settotalgroups = totalGroups => ({ type: SET_TOTAL_GROUPS, payload: totalGroups })
export const showsearchgroups = show => ({ type: SEARCH_GROUPS_SHOW, payload: show })
export const showsearchevents = show => ({ type: SHOW_SEARCH_EVENTS, payload: show })

// reducer
const intialState = {
  totalGroups: 0,
  showSearchGroups: false,
  showSearchEvents: false
}
function app (state = intialState, action) {
  switch (action.type) {
    case SET_TOTAL_GROUPS:
      console.log('Action: ', action)
      return {
        ...state,
        totalGroups: action.payload
      }
    case SEARCH_GROUPS_SHOW:
      console.log('Action: ', action)
      return {
        ...state,
        showSearchGroups: action.payload
      }
    case SHOW_SEARCH_EVENTS:
      console.log('Action: ', action)
      return {
        ...state,
        showSearchEvents: action.payload
      }
    default:
      return state
  }
}

export default app
