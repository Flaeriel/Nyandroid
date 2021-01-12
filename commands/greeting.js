const response = require('./function-modules/response.js');

module.exports = {
    name: 'greeting',
    aliases: ['hello', 'hey', 'hi'],
    description: 'greets back!',
    execute (message, args) {
        console.log(`The Nyandroid greets ${message.author.username}!`);
        return response.hello(message);
    },

};
