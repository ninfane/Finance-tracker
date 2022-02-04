import logo from './logo.svg'
import './App.css'
import generateStore from './Config/store'
import { Provider } from 'react-redux'

function App() {
    const store = generateStore()

    return (
        <Provider store={store}>
            <div>
                <h1>Hola mundo</h1>
            </div>
        </Provider>
    )
}

export default App
