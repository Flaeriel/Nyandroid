const { nyanMessage } = require('../util')

module.exports = {
    name: 'help',
    aliases: ['info'],
    description: 'get command info',
    execute (message, args) {
        return nyanMessage.respond(message, 'help')
    },
};
