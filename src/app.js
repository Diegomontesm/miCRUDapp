const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//IMPORTANDO RUTAS
const customerRoutes = require('./routes/customer');

//SETTINGS
app.set('port', process.env.PORT || 4000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3337826',
    password: 'ATIEDlTGGX',
    port: 3306,
    database: 'sql3337826'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use('/', customerRoutes);


//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), ()=>{
    console.log('Server on port 4000');
});

