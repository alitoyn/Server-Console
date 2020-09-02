// https://blog.petehouston.com/remote-command-execution-via-ssh-using-nodejs/
const config = require('./config');
const SSH = require('simple-ssh');

let ssh = new SSH({
    host: config.host,
    user: config.username,
    pass: config.password
});

ssh.exec('df -h /', {
    out: function(stdout) { console.log(stdout); },
    err: function(stderr) { console.log(stderr); },
    exit: function(code) { console.log(code); }
}).start();