const express = require ('express');
const morgan = require ('morgan');
const { PORT } = require ('./src/config.js')
//require('dotenv').config();

const app = express();

app.use(morgan('dev'));

const routes = require ('./src/routes/mainRoutes.js')



app.listen(PORT);


console.log('Servidor corriendo en puerto: ',PORT);


app.use('/payment', routes);