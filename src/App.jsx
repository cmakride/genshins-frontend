import { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom'
import AddCharacter from './pages/AddCharacter/AddCharacter';
import './App.css';
import * as genshinService from './services/genshins'

function App() {
  const [genshins, setGenshins]=useState([])

  const handleAddCharacter = async newCharacterData => {
    const newGenshin = await genshinService.create(newCharacterData)
    setGenshins([...genshins,newGenshin])

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
          <Route path='/add' element={<AddCharacter handleAddCharacter={handleAddCharacter}/>}/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
