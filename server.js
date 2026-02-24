const express = require('express');
const app = express();
const PORT = 3000;

const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi" }, { id: 2, title: "The Dark Knight", genre: "Action" },
    { id: 3, title: "Interstellar", genre: "Sci-Fi" }, { id: 4, title: "Parasite", genre: "Thriller" },
    { id: 5, title: "The Matrix", genre: "Sci-Fi" }, { id: 6, title: "Pulp Fiction", genre: "Crime" },
    { id: 7, title: "Forrest Gump", genre: "Drama" }, { id: 8, title: "The Lion King", genre: "Animation" },
    { id: 9, title: "Gladiator", genre: "Action" }, { id: 10, title: "Joker", genre: "Drama" },
    { id: 11, title: "Avatar", genre: "Sci-Fi" }, { id: 12, title: "Titanic", genre: "Romance" },
    { id: 13, title: "Seven", genre: "Mystery" }, { id: 14, title: "Up", genre: "Animation" },
    { id: 15, title: "Soul", genre: "Animation" }, { id: 16, title: "Coco", genre: "Animation" },
    { id: 17, title: "Dune", genre: "Sci-Fi" }, { id: 18, title: "Tenet", genre: "Action" },
    { id: 19, title: "Arrival", genre: "Sci-Fi" }, { id: 20, title: "Oldboy", genre: "Thriller" }
];

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/movies`);
});

// Final version for deployment