const express = require('express');
const app = express();
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const charactersRoutes = require('./routes/charactersRoutes');
const moviesRoutes = require('./routes/moviesRoutes');



const PORT = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', usersRoutes)
app.use('/api/characters', charactersRoutes)
app.use('/api/movies', moviesRoutes)

// app.use((req, res, next) => {
//     res.status(404).json('ERROR');
// })

app.listen(PORT, () => {
    console.log(`Service run on port ${PORT}`)
});

