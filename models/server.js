const express = require('express');

class Server {
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.routers();
    }

    routers(){
        this.app.use('/inicio', require('../routes/home'));
        this.app.use('/player', require('../routes/player'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`El server esta corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;