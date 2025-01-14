function mergeArrays(arr_1, arr_2) {
    return [...arr_1, ...arr_2];
}
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];

function removeDublicates(...args) {
    const newArr = [];
    args.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}

const newArr = removeDublicates(1, 2, 3, 2, 4, 1, 5);
console.log(newArr);
