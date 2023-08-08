const express = require('express')
const app = express()
const PORT = 3000

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const videogames = ['Monster Hunter', 'Deep Rock Galactic', 'Megaman Battle Network', 'Dragon Quest', 'Yakuza 7'];

app.get('/', function (req, res) {
    res.send('<h1>Hello Express! Use /# to see my favorites!</h1>')
})


app.get('/:indexOfVideoGames', (req, res) => {
    res.send(videogames[req.params.indexOfVideoGames])
})


//req stands for 'Request', res stands for 'Response'
app.listen(PORT, (req, res) =>
{
    console.log(`Server is now listing on Port ${PORT}`)
})
