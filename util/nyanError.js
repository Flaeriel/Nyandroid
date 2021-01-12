class BaseNyandroidError extends Error {
    get name() {
        return this.constructor.name;
    }
}

class NotImplementedError extends BaseNyandroidError {
    message = "this functionality isn't implemented yet"
}
class PatternMatchError extends BaseNyandroidError {
    message = "couldn't find a matching pattern"
}
class DiceModificationError extends BaseNyandroidError {
    message = "this is not a valid dice modifier"
}
class DiceSizeError extends BaseNyandroidError {
    message = "dice like this do not exist"
}
class DiceCountError extends BaseNyandroidError {
    message = "I'm not going to roll that many dice"
}

module.exports = {
    PatternMatchError,
    DiceModificationError,
    DiceSizeError,
    DiceCountError
};
