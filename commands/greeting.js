const { nyanMessage } = require('../util')

module.exports = {
    name: 'greeting',
    aliases: ['hello', 'hey', 'hi'],
    description: 'greets back!',
    execute (message, args) {
        return nyanMessage.respond(message, 'hello')
    },

};
