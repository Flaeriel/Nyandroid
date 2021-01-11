module.exports = {
    name: 'greeting',
    aliases: ['hello', 'hey', 'hi'],
    description: 'greets back!',
    execute (message, args) {
        message.reply('Hello, nya!');
        
        console.log('nyandroid greets back!');
    },
    
};
