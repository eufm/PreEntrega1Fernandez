import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import "./styles.css";

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            </Routes>
        </Router>
    );
}

export default App;