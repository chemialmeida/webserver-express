const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    //res.send(salida)
    res.render('home', {
        nombre: 'Jose Miguel',
    });
});

app.get('/about', (req, res) => {

    //res.send(salida)
    res.render('about');
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});