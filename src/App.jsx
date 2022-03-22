import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom'
import AddCharacter from './pages/AddCharacter/AddCharacter';
import './App.css';

function App() {
  const [genshins, setGenshins]=useState([])

  const handleCharacter = newCharacterData => {
    setGenshins([...genshins,newCharacterData])

  }

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
        <Routes>
          <Route path='/add' element={<AddCharacter handleCharacter={handleCharacter}/>}/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
