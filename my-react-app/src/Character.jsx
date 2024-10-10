
import { fetchName } from "./Swapi";
import { useState, useEffect } from "react";

function Character(props) {
    const character = props.character;
    const [homeworldName, setHomeworldName] = useState('');
    const [filmNames, setFilmNames] = useState([]);
    const [showFilms, setShowFilms] = useState(false);
    const [starshipNames, setStarshipNames] = useState([]);
    const [showStarships, setShowStarships] = useState(false);
    const [vehicleNames, setVehicleNames] = useState([]);
    const [showVehicles, setShowVehicles] = useState(false);

    useEffect(() => {
        async function fetchHomeworld() {
            const name = await fetchName(character.homeworld);
            setHomeworldName(name);
        }
        fetchHomeworld();
    }, [character.homeworld]);

    useEffect(() => {
        async function fetchFilms() {
            const names = await Promise.all(character.films.map(filmURL => fetchName(filmURL)));
            setFilmNames(names);
        }
        fetchFilms();
    }, [character.films]);

    useEffect(() => {
        async function fetchStarships() {
            const names = await Promise.all(character.starships.map(starshipURL => fetchName(starshipURL)));
            setStarshipNames(names);
        }
        fetchStarships();
    }, [character.starships]);

    useEffect(() => {
        async function fetchVehicles() {
            const names = await Promise.all(character.vehicles.map(vehicleURL => fetchName(vehicleURL)));
            setVehicleNames(names);
        }
        fetchVehicles();
    }, [character.vehicles]);

    const handleShowingFilms = () => {
        setShowFilms(prevShowFilms => !prevShowFilms);
    };

    const handleShowingStarships = () => {
        setShowStarships(prevShowStarships => !prevShowStarships);
    };

    const handleShowingVehicles = () => {
        setShowVehicles(prevShowVehicles => !prevShowVehicles);
    };
    return (
        <div className="p-6 bg-black opacity-50 mt-5 w-[300px] md:w-[700px] rounded-[100px] shadow-md mx-auto flex flex-col items-center justify-center">
          <div className="mb-4 ">
            <h2 className="text-2xl font-bold text-white text-[30px]">Character Details</h2>
            <p className="text-red-500 text-[20px] flex flex-col ml-4 mt-2 mb-2">
              <span className="font-semibold mb-1">Name: {character.name}</span>
              <span className="font-semibold mb-1">Birth Year: {character.birth_year}</span> 
              <span className="font-semibold mb-1">Gender: {character.gender}</span> 
              <span className="font-semibold mb-1">Height: {character.height} cm</span>
              <span className="font-semibold mb-1">Mass: {character.mass} kg</span> 
              <span className="font-semibold mb-1">Hair Color: {character.hair_color}</span> 
              <span className="font-semibold mb-1">Skin Color: {character.skin_color}</span> 
              <span className="font-semibold mb-1">Eye Color: {character.eye_color}</span> 
              <span className="font-semibold">Homeworld: {homeworldName}</span> 
            </p>
          </div>
          
          <div className="w-full flex justify-center items-start space-x-4">
            {filmNames.length > 0 && (
                <div className="mb-4 flex flex-col justify-center items-center w-2/3">
                    <button onClick={handleShowingFilms}
                        className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-orange-600"
                    >
                        Films
                    </button>
                    {showFilms && (
                        <ul className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-black hover:opacity-100">
                        {filmNames.map((name, index) => (
                            <li key={index} className="px-4 py-2 hover:bg-orange-500 transition duration-200">
                            {name}
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            )}
        
            {starshipNames.length > 0 && (
                <div className="mb-4 flex flex-col justify-center items-center w-2/3">
                <button
                    onClick={handleShowingStarships}
                    className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-orange-600"
                >
                    Starships
                </button>
                {showStarships && (
                    <ul className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-black hover:opacity-100">
                    {starshipNames.map((name, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-orange-500 transition duration-200">
                        {name}
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            )}
        
            {vehicleNames.length > 0 && (
                <div className="mb-4 flex flex-col justify-center items-center w-2/3">
                <button
                    onClick={handleShowingVehicles}
                    className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-orange-600"
                >
                    Vehicles
                </button>
                {showVehicles && (
                    <ul className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-black hover:opacity-100">
                    {vehicleNames.map((name, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-orange-500 transition duration-200">
                        {name}
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            )}
          </div>
        </div>
      );
}

export default Character;