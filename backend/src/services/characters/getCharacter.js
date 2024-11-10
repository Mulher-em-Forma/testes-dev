const fs = require('fs');
const filterEpisodes = require('../../helpers/filterEpisodes');

function getCharacters(characterID) {
    try {
        const charactersJson = fs.readFileSync('./characters.json', 'utf-8');
        const charactersParsed = JSON.parse(charactersJson);

        const character = charactersParsed.find(character => {
            return parseInt(character.id) === parseInt(characterID);
        });

        if (!character) return null;

        const seasons = [
            {number: 1, appearances: filterEpisodes(character.episode, 1, 11).length},
            {number: 2, appearances: filterEpisodes(character.episode, 12, 21).length},
            {number: 3, appearances: filterEpisodes(character.episode, 22, 31).length}
        ];

        let totalSeasonAppearances = 0;
        seasons.forEach(season => {totalSeasonAppearances = totalSeasonAppearances + season.appearances});

        const resCharacter = {
            ...character,
            seasons,
            totalSeasonAppearances,
            origin: character.origin.name,
            location: character.location.name
        }
        
        delete resCharacter.episode;
        delete resCharacter.url;
        
        return resCharacter;

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = getCharacters;
