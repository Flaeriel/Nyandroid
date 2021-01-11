module.exports = {
    name: 'sheep',
    aliases: ['sleep'],
    description: 'wish good night',
    execute (message, args) {
        message.reply(':sheep:');
        
        console.log('fluffy sheep');
    },
    
};
