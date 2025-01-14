function createPasswordChecker(passLong) {
    const checker = passLong;
    return (pass) => {
        if (pass.length == checker) {
            return false;
        } else {
            return true;
        }
    };
}

const passwordChecker = createPasswordChecker(4);
console.log(passwordChecker("qwerty"));
console.log(passwordChecker("qwer"));
