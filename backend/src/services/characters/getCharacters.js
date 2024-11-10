const fs = require('fs');
const sortCharacters = require('../../helpers/sortCharacters');
const filterEpisodes = require('../../helpers/filterEpisodes');

function getCharacters() {
    try {
        const charactersJson = fs.readFileSync('./characters.json', 'utf-8');
        const charactersParsed = JSON.parse(charactersJson);
        const characters = [];

        charactersParsed.forEach(character => {
            const seasons = [
                { number: 1, appearances: filterEpisodes(character.episode, 1, 11).length },
                { number: 2, appearances: filterEpisodes(character.episode, 12, 21).length },
                { number: 3, appearances: filterEpisodes(character.episode, 22, 31).length }
            ];

            let totalSeasonAppearances = 0;
            seasons.forEach(season => { totalSeasonAppearances = totalSeasonAppearances + season.appearances });

            const newCharacter = {
                ...character,
                seasons,
                totalSeasonAppearances,
                origin: character.origin.name,
                location: character.location.name
            }
            
            delete newCharacter.episode;
            delete newCharacter.url;

            characters.push(newCharacter);
        });

        return sortCharacters(characters);
    } catch (error) {
        console.log(error);
        return null
    }
}

module.exports = getCharacters;