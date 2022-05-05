const EventEmitter = require('events');

var Url ='http/www.todayodia.com/log'

class Logger extends EventEmitter {
    log(messsage){
        //Send a HTTP request
        console.log(messsage);

        //Raise an event
        this.emit('messageLogged', {id: 1, url:'http://'});
    }
}


module.exports = Logger;