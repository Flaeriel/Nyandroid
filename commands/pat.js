const { nyanMessage, nyanLogger } = require('../util')
const logger = nyanLogger.logger

module.exports = {
    name: 'pat',
    aliases: ['pats'],
    description: 'pat the nyandroid!',
    execute (message, args) {
        logger.log('info', 'The Nyandroid was pat and is purring now!')
        return nyanMessage.respond(message, 'purr')
    },
};
