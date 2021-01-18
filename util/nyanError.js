class BaseNyandroidError extends Error {
    get name() {
        return this.constructor.name;
    }
}

class NotImplementedError extends BaseNyandroidError {}
class PatternMatchError extends BaseNyandroidError {}
class DiceModError extends BaseNyandroidError {}
class DiceSizeError extends BaseNyandroidError {}
class DiceCountError extends BaseNyandroidError {}

module.exports = {
    PatternMatchError,
    //DiceModError,
    DiceSizeError,
    DiceCountError
};
