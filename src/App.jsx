import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import "./styles.css";

function App() {
  return (
    <div id="app">
      <NavBar/>
      <ItemListContainer greeting={"Esta página está actualizándose."} />
    </div>
  );
}

export default App;
