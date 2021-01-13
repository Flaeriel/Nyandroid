const { nyanMessage, nyanLogger } = require('../util')
const logger = nyanLogger.logger

module.exports = {
    name: 'sleep',
    aliases: ['night'],
    description: 'wish good night',
    execute (message, args) {
        logger.log('info', 'The Nyandroid is nyawning!')
        return nyanMessage.respond(message, 'sleep')
    },

};
