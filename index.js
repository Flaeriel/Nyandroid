// fs is Node's native file system
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// require the config file
// const config = require('./config.json');
// destructing to extract the prefix and token variables
const { prefix, token } = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// extends JS native Map class + other useful functionality
client.commands = new Discord.Collection();

// dynamically retrieve all custom commands
// only includes JS files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// set commands for the collection created above
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// hopefully dodging errors
client.on('error', console.error);

// when the client is ready, run this code
// this even will only trigger one time after logging in
client.once('ready', () => {
    client.user.setActivity('Birbs', {type:'WATCHING'});
    console.log(`${client.user.tag} is online!`);
});

// listening to messages
client.on('message', message => {
    // exit if message doesn't start with prefix
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    // create 'args' variable without prefix & splits it into an array by spaces
    // can also deal with additional (accidental) spaces now using regex
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    // takes the first element in the array while removing it from the original array
    const commandName = args.shift().toLowerCase();

    // dynamically executing commands
    // exit if there isn't a command with that name
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command)
        return message.reply(`Idk what you mean, nya!`);;

    // check for arguments, whenever args is set to true in a command file
    if (command.args && !args.length) {
        return message.reply(`You didn't provide any arguments, nya!`);
    }
    // if there is, get the command and call its execute method while passing message and args variables
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`${error.message}, nya!`);
    }

});

// keep this at the end
// login to Discord with your app's token
client.login(token);
