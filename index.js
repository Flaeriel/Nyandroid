// fs is Node's native file system
const fs = require('fs')

// require the discord.js module
const Discord = require('discord.js')

// require the config file
// const config = require('./config.json');
// destructing to extract the prefix and token variables
const { prefix, token } = require('./config.json')

// setup a logger
const { nyanLogger, nyanMessage } = require('./util')
const logger = nyanLogger.logger
const errMessage = nyanMessage.errMessage

// create a new Discord client
const client = new Discord.Client()

// extends JS native Map class + other useful functionality
client.commands = new Discord.Collection()

// dynamically retrieve all custom commands
// only includes JS files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

// set commands for the collection created above
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    // set a new item in the collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command)
}

// when the client is ready, run this code
// this even will only trigger one time after logging in
client.once('ready', () => {
    client.user.setActivity('Birbs', {type:'WATCHING'})
    logger.log('info', `${client.user.tag} is online!`)
});

// listening to messages
client.on('message', message => {
    // exit if message doesn't start with prefix
    if (!message.content.startsWith(prefix) || message.author.bot)
        return
    // create 'args' variable without prefix & splits it into an array by spaces
    // can also deal with additional (accidental) spaces now using regex
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    // takes the first element in the array while removing it from the original array
    const commandName = args.shift().toLowerCase()

    // dynamically executing commands
    // exit if there isn't a command with that name
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (!command) {
        logger.log('warn', `Unknown Command: ${message}`)
        return message.reply(`${errMessage('UnknownCommand')}, nya!`)
    }
    // check for arguments, whenever args is set to true in a command file
    if (command.args && !args.length) {
        logger.log('warn', `No Arguments for: ${message}`)
        return message.reply(`${errMessage('NoArguments')}, nya!`)
    }
    // if there is, get the command and call its execute method while passing message and args variables
    try {
        logger.log('info', `${message.author.username}: ${message.content}`)
        command.execute(message, args)
    } catch (error) {
        logger.log('error', error.stack)
        message.reply(`${errMessage(error.name)}, nya!`)
    }

});

// hopefully dodging errors
process.on('uncaughtException', error => logger.log('error', error));

// keep this at the end
// login to Discord with your app's token
client.login(token)
