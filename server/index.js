const express =  require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '../app')
app.use(express.static(publicDirectoryPath))


server.listen(3000, () => {
    console.log('listening on *:3000');
});