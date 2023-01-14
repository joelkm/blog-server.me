const http = require('http');
const mongoose = require('mongoose');

// const MONGO_URL = 


const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('Connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(error);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });    
}

startServer();