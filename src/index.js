module.exports = function reverse(number) {
    const oppositeNumber = Math.abs(number);
    return oppositeNumber.toString().split("").reverse().join("");
};
