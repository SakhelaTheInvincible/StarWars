
const url = 'https://swapi.dev/api/people';

const takeId = url => {
    const dividedUrl = url.split('/');
    return dividedUrl[dividedUrl.length - 2];
};

export const fetchCharacters = async (page = 1) => {
    try {
        const data = await fetch(`${url}/?page=${page}`);
        const json = await data.json();
        const resultList = json.results.map(character => ({
            ...character,
            id: takeId(character.url)
        }))
        return resultList;
    } catch (error) {
        console.log(error);
        return [];
    }
};


export const fetchName = async (url) => {
    try {
        const data = await fetch(url);
        const json = await data.json();
        if (url.includes("films"))
            return json.title;
        else
            return json.name;
    } catch (error) {
        console.log(error);
        return "";
    }
}

export const findCharacter = async (name) => {
    for (let i = 1; i < 10; i++) {
        const pageList = await fetchCharacters(i);
        const character = pageList.find(obj => obj.name === name)
        if (character)
            return character;
    }
    return null;
}