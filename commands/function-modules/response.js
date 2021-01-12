function hello(message) {
    return message.channel.send(`Hello ${message.author}, nya!`);
};
function pat(message) {
    return message.channel.send(`Purr!`);
};
function sleep(message) {
    return message.channel.send(`Sleep well ${message.author}, nyawwn...`);
};
function ignore(message, args) {
    return message.channel.send(`Meow will be ignoring everything past ${args[0]}, nya!`);
};

module.exports = { hello, pat, sleep, ignore };
