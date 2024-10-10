import { useState } from "react";

function SearchBar(props) {
    const [searchName, setSearchName] = useState('');

    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    const handleSearchClick = (event) => {
        event.preventDefault();
        if (searchName) {
            props.search(searchName);
            setSearchName('');
        }
    };

    return (
        <div className="ml-12 md:ml-0 w-2/3 md:w-1/3 z-10 mt-5">
            <form className="flex justify-between items-center" onSubmit={handleSearchClick}>
                <input className="w-3/4 h-10 p-3 rounded-[20px]" type="text" value={searchName} onChange={handleSearchChange} placeholder="Search With A Name..."/>
                <button className="h-10 p-3 flex justify-center items-center mr-10 rounded-[20px] hover:border-blue-300 text-orange-400 hover:text-orange-300" type="submit">Search</button>
            </form>
            {props.noSuchName && <p className="ml-5 mt-1 text-red-600">Character with this name doesn't exist...</p>}
        </div>
    );
}

export default SearchBar;