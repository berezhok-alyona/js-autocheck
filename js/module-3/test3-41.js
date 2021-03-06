const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Зелье ${newPotion.name} уже есть в инвентаре!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: "Невидимка", price: 620 });
atTheOldToad.addPotion({ name: "Зелье силы", price: 270 });
console.table(atTheOldToad.getPotions());

// atTheOldToad.removePotion("Дыхание дракона");
atTheOldToad.removePotion("Зелье скорости");
console.table(atTheOldToad.getPotions());

atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
atTheOldToad.updatePotionName("Каменная кожа", "Зелье неуязвимости");
console.table(atTheOldToad.getPotions());
