import CharacterList from "./CharacterList"
import Character from "./Character"
import {useState} from 'react'
import Pagination from "./Pagination";
import { findCharacter } from "./Swapi";
import SearchBar from "./SearchBar";
import './index.css';
import backgroundImage from './assets/starwars.jpg';

function App() {
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [noSuchName, setNoSuchName] = useState(false);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleHomePage = () => {
    setSelectedCharacter(null);
    setPage(1);
    setNoSuchName(false);
  };
  
  const handleSearchCharacter = async (name) => {
    const character = await findCharacter(name);
    if (character)
      setNoSuchName(false);
    else
      setNoSuchName(true);

    setSelectedCharacter(character);
  }

  return (
    <div className="min-h-screen flex flex-col h-screen items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.2 }}></div>

      <button className="absolute left-5 top-5 w-[100px] h-[50px] z-10 bg-blue-900 opacity-90 hover:border-blue-200 text-white hover:text-orange-300" onClick={handleHomePage}>Home</button>

      {!selectedCharacter && <SearchBar search={handleSearchCharacter} noSuchName={noSuchName}/>}

      {selectedCharacter ? 
        <div className="z-10">
          <Character character={selectedCharacter}/>
        </div> :

        <div className="z-10 w-5/6 mt-6 h-screen">
          <CharacterList page={page} onCharacterClick={handleCharacterClick}/>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2"><Pagination currentPage={page} setPage={setPage}/></div>
        </div>
      }
    </div>
  );
}

export default App
