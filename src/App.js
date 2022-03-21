import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom'

import './App.css';

function App() {
  const [genshins, setGenshins]=useState([])
  return (
    <div className="App">
      <header className="App-header">
      Genshin Impact CRUD
        <nav>
          <NavLink to='/'>Character List</NavLink>
          <NavLink className='m-left' to='/add'>Add Character</NavLink>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
