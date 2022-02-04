import { combineReducers } from 'redux'

//aca se agregan todos los reducers
const allReducers = combineReducers({})

export default (state, action) => {
    return allReducers(state, action)
}
