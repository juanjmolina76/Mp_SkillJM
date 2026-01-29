const express = require ('express');
const morgan = require ('morgan');
const { PORT } = require ('./src/config.js')
//require('dotenv').config();
const path = require ('path');
path.resolve();

const app = express();

app.use(morgan('dev'));

const routes = require ('./src/routes/mainRoutes.js');

app.use(express.static(path.resolve('src/public')));

app.listen(PORT);

app.use(express.json());


console.log('Servidor corriendo en puerto: ',PORT);


app.use('/payment', routes);