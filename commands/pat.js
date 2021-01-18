const { nyanMessage } = require('../util')

module.exports = {
    name: 'pat',
    aliases: ['pats'],
    description: 'pat the nyandroid!',
    execute (message, args) {
        return nyanMessage.respond(message, 'purr')
    },
};
