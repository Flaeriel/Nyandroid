class BaseNyandroidError extends Error {
    get name() {
        return this.constructor.name;
    }
}

class NotImplementedError extends BaseNyandroidError {}
class PatternMatchError extends BaseNyandroidError {}
class DiceModificationError extends BaseNyandroidError {}
class DiceSizeError extends BaseNyandroidError {}
class DiceCountError extends BaseNyandroidError {}

module.exports = {
    PatternMatchError,
    DiceModificationError,
    DiceSizeError,
    DiceCountError
};
