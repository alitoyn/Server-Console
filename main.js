// https://blog.petehouston.com/remote-command-execution-via-ssh-using-nodejs/
const config = require('./config');
const SSH = require('simple-ssh');

class Server {
    constructor() {
        let lastData = null
    }

    updateData(data) {
        console.log(data)
        this.lastData = data
    }
}

let server = new Server

let ssh = new SSH({
    host: config.host,
    user: config.username,
    pass: config.password
});

ssh.exec('df -h /', {
    out: function(stdout) {
        server.updateData(stdout)
            // console.log(stdout);
    },

    // err: function(stderr) { console.log(stderr); },
    // exit: function(code) { console.log(code); }
}).start();

while (server.lastData === undefined) {
    continue;
}

console.log(server.lastData + '_')