const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const stroka = "Петя Васечкин - асс в программировании!";

function getEvenNumbers(arr) {
    const newArr = [];
    arr.forEach((element) => {
        if (element % 2 == 0) {
            newArr.push(element);
        }
    });
    return newArr;
}

function calculateAverage(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
}

function capitalizeFirstLetter(strArg) {
    const strArr = strArg.split(" ");
    let newStr = "";
    strArr.forEach((element) => {
        newStr += ` ${element[0].toUpperCase()}${element.slice(1)}`;
    });
    return newStr;
}
