function createCounter() {
    let count = 0;
    return {
        increment() {
            ++count;
        },
        decrement() {
            --count;
        },
        getValue() {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
