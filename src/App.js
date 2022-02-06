import { Provider } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/components/Home'
import Navbar from './views/components/Navbar'

function App() {
    // const store = generateStore()

    return (
        <>
            {/* <Navbar /> */}
            <Home />
        </>
    )
}

export default App
