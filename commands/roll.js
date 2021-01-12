const DiceClass = require('./roll-modules/diceClass');
const DiceModClass = require('./roll-modules/diceModClass');
const ArgsHandler = require('./roll-modules/argsHandler');

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        let handler = new ArgsHandler();
        let call = handler.match(args[0]);
        let splits = handler.split(args[0], call.pattern);
        console.log(call);

        if (args.length > 1) {
            message.channel.send(`I will be ignoring everything past ${args[0]}, nya!`);
        }

        if (call.name === 'calc') {
            throw "Calc Not Implemented Error!";

        } else if (call.name === 'dice_mod') {
            let dice = new DiceModClass(splits[1], splits[2], splits[3], splits[4]);
            console.log(dice);
            let result = dice.roll();
            console.log(result);
            return message.channel.send(`Rolls: **${result.dice}** ${dice.operator} ${dice.modifier} = **${result.sum}**`).catch(console.error);

        } else if (call.name === 'dice') {
            let dice = new DiceClass(splits[1], splits[2]);
            console.log(dice);
            let result = dice.roll();
            console.log(result);
            return message.channel.send(`Rolls: **${result.dice}** = **${result.sum}**`).catch(console.error);
        }

    },

};
