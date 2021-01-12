const DiceClass = require('./roll-modules/diceClass');
const DiceModClass = require('./roll-modules/diceModClass');
const pattern_handler = require('./roll-modules/patternHandler');
const response = require('./function-modules/response.js');

module.exports = {
    name: 'roll',
    aliases: ['r', 'rawr'],
    description: 'rolling dice',
    args: true,
    execute (message, args) {
        let collect = [];
        for (let i = 0; i < args.length; i++) {
            let call = pattern_handler.diceMatch(args[i]);
            let splits = pattern_handler.diceSplit(args[i], call.pattern);

            if (call.name === 'dice' || call.name === 'dice_mod' ) {
                let dice;
                if (call.name === 'dice_mod') {
                    dice = new DiceModClass(splits[1], splits[2], splits[3], splits[4]);
                } else if (call.name === 'dice') {
                    dice = new DiceClass(splits[1], splits[2]);
                }
                let total = dice.add_up(dice.roll());
                // logging the dice object
                console.log(dice);
                collect.push(response.dice_result(message, total, dice));
            }
        }
        return collect;
    },
};
