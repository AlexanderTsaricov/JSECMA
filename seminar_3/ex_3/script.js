class Product {
    name = "";
    price = 0;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    customerName = "";
    cartArr = {};
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.initialTotalCost = initialTotalCost;
    }

    addItem(product, quantity = 1) {
        this.cartArr[product.name] = [product, quantity];
        this.initialTotalCost += product.price;
    }
    getCurrentTotalCost() {
        return this.initialTotalCost;
    }

    checkout() {
        console.log(`Order placed for ${this.customerName}`);
        console.log(
            `Your purchase worth - ${this.getCurrentTotalCost()} has been paid`
        );
        console.log("Thank you for purchase");
        this.initialTotalCost = 0;
        this.cartArr = {};
    }
}

const fish = new Product("fish", 100);
const bread = new Product("bread", 20);
const shugar = new Product("shugar", 35);

const cart = new ShoppingCart("Luna");
cart.addItem(fish);
cart.addItem(bread);
cart.addItem(shugar);

cart.checkout();
