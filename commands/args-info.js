module.exports = {
    name: 'args-info',
    description: 'informaton about the arguments provided',
    args: true,
    execute(message, args) {
        
        message.channel.send(`Arguments: ${args}\nArguments count: ${args.length}`);
        
    },
};
