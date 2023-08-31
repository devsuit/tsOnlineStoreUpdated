interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

type Cart = Product[];

interface Customer {
    id: number;
    name: string;
    email: string;
}

type Order = {
    customer: Customer;
    cart: Cart;
}


let products: Product[] = [
    {
        id: 11,
        name: "iPhone 14",
        price: 10000,
        category: "mobile",
    },
    {
        id: 12,
        name: "Hp Core i7",
        price: 20000,
        category: "Laptop",
    },
    {
        id: 13,
        name: "Laser Jet Pro 400",
        price: 15000,
        category: "Printer",
    },
];

let customer: Customer = { 
    id: 1, 
    name: "Abbas",
    email: "sqabbas1994@gmail.com"
 };

let cart: Cart = products;

let order: Order = {
    customer: customer,
    cart: cart
};

console.log("Customer:", order.customer.name);
console.log("Email:", order.customer.email);
console.log("Cart:-");

function calculateTotalPrice(cart: Cart): number {
    let total = 0;
    for (let product of cart) {
        total += product.price;
        console.log(`The price for ${product.name} in cart is: ${product.price}`);
    }
    console.log("------------------------------------------");
    console.log(`Total price for the all products in cart is: ${total}`);
    return total;
}

calculateTotalPrice(cart);
console.log("------------------------------------------");
