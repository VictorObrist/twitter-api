const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//const url = "mongodb+srv://admin:admin123@cluster0-joufj.mongodb.net/test?retryWrites=true";
const url = "mongodb+srv://twitter-user:twitter-password@clustertwitterapi-ttl3n.mongodb.net/twitter-db?retryWrites=true";

mongoose.connect(url, {useNewUrlParser: true});

const app = express();

app.use(express.json());
app.use(routes);

/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
 */
app.listen(3000, () => {
    console.log('Server started http://localhost:3000');
});