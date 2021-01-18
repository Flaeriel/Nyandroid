const Discord = require('discord.js')

const replyM = require('./replyMessages.json')
const errorM = require('./errorMessages.json')
const NYA = ", nya!"

const respond = (message, type) => {
    switch (type) {
        case 'hello':
            return message.channel.send(replyM.hello.replace("AUTHOR", message.author)+NYA)
        case 'purr':
            return message.channel.send(replyM.purr)
        case 'sleep':
            return message.channel.send(replyM.sleep.replace("AUTHOR", message.author))
    }
}

const diceResult = (message, item, dice, droll) => {
    const nyanEmbed = new Discord.MessageEmbed()
        .setColor('#FFBE26')
        .setTitle(`ROLLS ${item}`)
        .setDescription(`**:game_die:  ${droll.rolls.join(' ')}**`)
    if (dice.mod !== null) {
        nyanEmbed.addField(`Modifier`, `${dice.opr}${dice.mod}`)
    }
    if (dice.stuntDie) {
        let stunt = ''
        if (droll.stunt === true) stunt = '*- stunt!*'
        nyanEmbed.addField(`Stunt Die`, `${droll.rolls[2]} ${stunt}`)
    }
    if (dice.count > 1 || dice.mod !== null) {
        nyanEmbed.addField(`Total`, droll.total)
    }
    return message.channel.send(nyanEmbed)
}

const errMessage = err => {
    // no break needed because of return
    switch(err) {
        case 'UnknownCommand':
            return errorM.UnknownCommand+NYA
        case 'NoArguments':
            return errorM.NoArguments+NYA
        case 'PatternMatchError':
            return errorM.PatternMatchError+NYA
        case 'DiceModError':
            return errorM.DiceModError+NYA
        case 'DiceSizeError':
            return errorM.DiceSizeError+NYA
        case 'DiceCountError':
            return errorM.DiceCountError+NYA
        default:
            return errorM.DefaultError+NYA
    }
}

module.exports = {
    respond,
    diceResult,
    errMessage
}
