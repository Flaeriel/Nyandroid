class PatternMatchError extends Error {
    message = "No Matching Dice Roll Pattern!";
}
class DiceModificationError extends Error {
    message = "Invalid Dice Modifier!";
}
class DiceSizeError extends Error {
    message = "Invalid Dice Size!";
}
class DiceCountError extends Error {
    message = "Invalid Dice Count";
}

module.exports = { PatternMatchError, DiceModificationError, DiceSizeError, DiceCountError };
