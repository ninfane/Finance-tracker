import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './views/components/Navbar'

function App() {
    // const store = generateStore()

    return (
        // <Provider store={store}>
        <div>
            <Navbar />
        </div>
        // </Provider>
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Navbar />}></Route>
        //     </Routes>
        // </Router>
    )
}

export default App
