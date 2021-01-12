const { nyanMessage } = require('../util')

module.exports = {
    name: 'greeting',
    aliases: ['hello', 'hey', 'hi'],
    description: 'greets back!',
    execute (message, args) {
        console.log(`The Nyandroid greets ${message.author.username}!`)
        return nyanMessage.hello(message)
    },

};
