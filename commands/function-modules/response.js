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

function dice_result(message, total, dice) {
    if(dice.modifier === false) {
        if(dice.count > 1) {
            return message.channel.send(`Rolls: **${dice.rolls}** = **${total}**`);
        } else {
            return message.channel.send(`Rolls: **${dice.rolls}**`);
        }
    } else {
        return message.channel.send(`Rolls: **${dice.rolls}** ${dice.operator} ${dice.modifier} = **${total}**`);
    }
}

module.exports = { hello, pat, sleep, ignore, dice_result };
