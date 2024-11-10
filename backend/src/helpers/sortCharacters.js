const sortCharacters = (characters) => {
    return characters.sort((a, b) => {
        if (b.totalSeasonAppearances !== a.totalSeasonAppearances) {
            return b.totalSeasonAppearances - a.totalSeasonAppearances;
        }
        return a.name.localeCompare(b.name);
    });
}

module.exports = sortCharacters;