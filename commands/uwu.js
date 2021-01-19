const { nyanMessage } = require('../util')

module.exports = {
    name: 'uwu',
    aliases: ['owo'],
    description: 'owoify',
    execute (message, args) {
        let str = message.content.slice(5) + ' uwu!'
        return message.channel.send(nyanMessage.owoify(str))
    },

};
