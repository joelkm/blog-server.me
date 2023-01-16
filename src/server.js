const http = require('http');
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://retink-task:retink@cluster0.dklxm8g.mongodb.net/retink-task?retryWrites=true&w=majority'


const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('Connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });    
}

startServer();