var products = [
  {
    color: "white",
    price: 10,
    name: "Xasic T-shirt",
  },
  {
    color: "red",
    price: 5,
    name: "Cheap T-shirt",
  },
  {
    color: "black",
    price: 50,
    name: "Exclusive T-shirt",
  },
];

function sortProducts() {
  for (let i = 0; i < products.length; i++) {
    const productPrice = products[i].price;
    const sortedProducts = products.sort(function (a, b) {
      return a.price - b.price;
    });
    console.log(sortedProducts);
  }
}
sortProducts();
