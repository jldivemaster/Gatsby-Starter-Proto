import { combineReducers } from 'redux'

const selectedViewReducer = () => {
  return "Temporary View Reducer"
}

export default combineReducers({
  selectedView: selectedViewReducer
})
