let products = [
    {
        name: "milk",
        type: "milk",
        price: 12000
    },

    {
        name: "tomato",
        type: "vegetables",
        price: 20000
    },

    {
        name: "govyadina",
        type: "meat",
        price: 88000
    },

    {
        name: "konyak",
        type: "alcohol",
        price: 50000
    },

    {
        name: "tvorog",
        type: "milk",
        price: 13000
    },

    {
        name: "potato",
        type: "vegetables",
        price: 5000
    },

    {
        name: "kruryatina",
        type: "meat",
        price: 30000
    },

    {
        name: "baranina",
        type: "meat",
        price: 80000
    },

    {
        name: "kolbasa",
        type: "meat",
        price: 60000
    },

    {
        name: "pivo",
        type: "alcohol",
        price: 6000
    },

    {
        name: "vine",
        type: "alcohol",
        price: 45000
    },

    {
        name: "whiskey",
        type: "alcohol",
        price: 10000000
    },

    {
        name: "cheese",
        type: "milk",
        price: 600000
    },

    {
        name: "yogurt",
        type: "milk",
        price: 10000
    }
]

// 20

let salesProducts = [];

let ask = +prompt("Введите процент скидки")

for (let item of products) {

    let cost = item['price']
    let sale = cost * ask / 100
    let discountPrice = cost - sale
    item.price = discountPrice
    salesProducts.push(item)
}


console.log(salesProducts);
// console.log(products); 