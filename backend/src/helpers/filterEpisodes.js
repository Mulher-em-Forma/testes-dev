const filterEpisodes = (episodes, start, end) => {
    return episodes.filter(ep => {
        ep = ep.replace("https://rickandmortyapi.com/api/episode/", "");
        ep = parseInt(ep);
        if (ep >= start && ep <= end) return ep;
    });
}

module.exports = filterEpisodes;