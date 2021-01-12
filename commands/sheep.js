const response = require('./function-modules/response.js');

module.exports = {
    name: 'sheep',
    aliases: ['sleep'],
    description: 'wish good night',
    execute (message, args) {
        console.log('The Nyandroid is nyawning!');
        return response.sleep(message);
    },

};
