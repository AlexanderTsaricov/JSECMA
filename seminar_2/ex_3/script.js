const Calculator = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
};

console.log(Calculator.add.call(null, 2, 3));
const newSubstr = Calculator.substract.bind(null, ...[2, 3]);
console.log(newSubstr());
console.log(Calculator.multiply.apply(null, [2, 3]));
