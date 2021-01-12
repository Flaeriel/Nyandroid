const { nyanMessage } = require('../util')

module.exports = {
    name: 'sleep',
    aliases: ['night'],
    description: 'wish good night',
    execute (message, args) {
        console.log('The Nyandroid is nyawning!')
        return nyanMessage.sleep(message)
    },

};
