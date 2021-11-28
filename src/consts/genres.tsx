export enum genresNames {
    all = "all",
    documentary = "documentary",
    comedy = "comedy",
    horror = "horror",
    crime = "crime",
}

const genres: Array<{id: string, name: string}> = [
    {
        id: genresNames.all,
        name: genresNames.all
    },
    {
        id: genresNames.documentary,
        name: genresNames.documentary
    },
    {
        id: genresNames.comedy,
        name: genresNames.comedy
    },
    {
        id: genresNames.horror,
        name: genresNames.horror
    },
    {
        id: genresNames.crime,
        name: genresNames.crime
    }
];

export default genres;
