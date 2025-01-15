class BankAccount {
    static bankName = "Tincoff";
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(count) {
        this.balance += count;
    }
    withrow(count) {
        if (count > this.balance) {
            this.balance = 0;
        } else {
            this.balance -= count;
        }
    }
}

const account = new BankAccount("329859852345", 1000);
console.log(account.accountNumber, account.bankName, account.balance);
account.deposit(500);
console.log(account.accountNumber, account.bankName, account.balance);
account.withrow(1000);
console.log(account.accountNumber, account.bankName, account.balance);
account.withrow(1000);
console.log(account.accountNumber, account.bankName, account.balance);
