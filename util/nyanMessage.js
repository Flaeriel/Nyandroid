const Discord = require('discord.js')

const NYA = ", nya!"

const respond = (message, type) => {
    switch (type) {
        case 'hello':
            message.channel.send(`Hello ${message.author}`+NYA); break
        case 'purr':
            message.channel.send(`Purr!`); break
        case 'sleep':
            message.channel.send(`Sleep well ${message.author}, nyawwn...`); break
    }
}

const diceResult = (message, item, total, dice) => {
    const nyanEmbed = new Discord.MessageEmbed()
        .setColor('#FFBE26')
        .setTitle(`ROLLS ${item}`)
        .setDescription(`**:game_die:  ${dice.rolls}**`)
    if (dice.modifier !== false) {
        nyanEmbed.addField(`Modifier`, `${dice.operator}${dice.modifier}`)
    }
    if (dice.stuntDie) {
        nyanEmbed.addField(`Stunt Die`, dice.rolls[2])
    }
    if (dice.count > 1 || dice.modifier !== false) {
        nyanEmbed.addField(`Total`, total)
    }
    return message.channel.send(nyanEmbed)
}

const errMessage = (err) => {
    // no break needed because of return
    switch(err) {
        case 'UnknownCommand':
            return "Idk what you mean"+NYA
        case 'NoArguments':
            return "You didn't provide any arguments"+NYA
        case 'PatternMatchError':
            return "couldn't find a matching pattern"+NYA
        case 'DiceModificationError':
            return "this is not a valid dice modifier"+NYA
        case 'DiceSizeError':
            return "dice like this do not exist"+NYA
        case 'DiceCountError':
            return "I'm not going to roll that many dice"+NYA
        default:
            return "Something went wrong"+NYA
    }
}

module.exports = {
    respond,
    diceResult,
    errMessage
}
