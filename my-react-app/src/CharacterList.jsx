
import {useState, useEffect} from 'react'
import {fetchCharacters} from './Swapi'

function CharacterList(props) {
    const[list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const characters = await fetchCharacters(props.page);
            setList(characters);
        };
        getList();
    }, [props.page]);

    const listCharacters = list.map(character => 
        <div key={character.id} onClick={() => props.onCharacterClick(character)}
            className="w-full sm:w-1/3 h-[145px] p-2">
            <div className="bg-black opacity-60 h-full flex items-center justify-center text-[36px] font-mono font-bold rounded-[30px] text-orange-600 hover:text-yellow-400"> 
                {character.name}
            </div>
        </div>
    );
    return (
        <div className="w-full flex flex-wrap justify-center">{listCharacters}</div>
    );
}

export default CharacterList;