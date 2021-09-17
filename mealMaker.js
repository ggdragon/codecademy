const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appeitizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appeitzers = appetizers;
  },
 set mains(mains) {
    this._courses.mains = mains;
  },
 set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      apetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      
      return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}, The price is $${totalPrice}.`;
  }
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Egg Rolls', 4.99);
menu.addDishToCourse('appetizers', 'Calamari', 5.99);
menu.addDishToCourse('mains', 'Prime Steak', 30.99);
menu.addDishToCourse('mains', 'Lamb Chop', 20.99);
menu.addDishToCourse('mains', 'Shrimp Pasta', 17.99);
menu.addDishToCourse('desserts', 'Lemon Pie', 30.99);
menu.addDishToCourse('desserts', 'Fruit Cake', 20.99);
menu.addDishToCourse('desserts', 'Flan', 17.99);

let meal = menu.generateRandomMeal();
console.log(meal);
