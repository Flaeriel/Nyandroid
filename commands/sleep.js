const response = require('./function-modules/response.js');

module.exports = {
    name: 'sleep',
    aliases: ['night'],
    description: 'wish good night',
    execute (message, args) {
        console.log('The Nyandroid is nyawning!');
        return response.sleep(message);
    },

};
