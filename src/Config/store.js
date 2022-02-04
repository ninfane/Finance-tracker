import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//importar los reducers

const rootReducer = combineReducers({
    //aca van los reducers [nombre]: [reducer]
})

export default function generateStore() {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}
