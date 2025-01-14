function createCalculator() {
    let res = 0;
    class inside {
        add(arg) {
            res = res + arg;
            return res;
        }
        substract(arg) {
            res = res - arg;
            return res;
        }
    }
    return new inside();
}

const calculator = createCalculator();

console.log(calculator.add(1));
console.log(calculator.substract(2));
console.log(calculator.add(1));
