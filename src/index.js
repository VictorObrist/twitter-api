const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

const app = express();

// Para usar SOCKET.IO ************
const server = http.Server(app); //crear servidor para la app
const io = socket(server); //implementar socket.io en el servidor
io.set('origin','http://localhost:3000');

//const url = "mongodb+srv://admin:admin123@cluster0-joufj.mongodb.net/test?retryWrites=true";
const url = "mongodb+srv://twitter-user:twitter-password@clustertwitterapi-ttl3n.mongodb.net/twitter-db?retryWrites=true";

mongoose.connect(url, {useNewUrlParser: true});

//intercepta la peticion y agrega el socket.io
app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
 */
server.listen(3000, () => {
    console.log('Server started http://localhost:3000');
});