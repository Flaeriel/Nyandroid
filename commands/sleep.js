const { nyanMessage } = require('../util')

module.exports = {
    name: 'sleep',
    aliases: ['night'],
    description: 'wish good night',
    execute (message, args) {
        return nyanMessage.respond(message, 'sleep')
    },

};
