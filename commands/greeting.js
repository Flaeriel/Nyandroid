const { nyanMessage, nyanLogger } = require('../util')
const logger = nyanLogger.logger

module.exports = {
    name: 'greeting',
    aliases: ['hello', 'hey', 'hi'],
    description: 'greets back!',
    execute (message, args) {
        logger.log('info', `The Nyandroid greets ${message.author.username}!`)
        return nyanMessage.respond(message, 'hello')
    },

};
