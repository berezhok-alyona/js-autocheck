/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    // ADD NEW PROPERTY 'QUANTITY'

    for (const item of this.items) {
      console.log(item);

      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
      console.table(this.items);
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;
    // const items = this.items;
    for (const item of items) {
      if (item.name === productName) {
        console.log(item);
        const productIndex = items.indexOf(item);
        items.splice(productIndex, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;
    for (const { price, quantity } of items) {
      console.log(price);
      totalPrice += price * quantity;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });

console.table(cart.getItems());

console.log("Total: ", cart.countTotalPrice());

cart.remove("🍎");
console.table(cart.getItems());

cart.clear();
console.log("Clear the cart", cart.getItems());
