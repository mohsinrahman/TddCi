const calculator = require('../pizza')

test('Number of people 6', () => {
  const drinks = 3;
  const pizzas = 2;
  const totalPrice = 299.99;
   const persons = 6;
   const result = calculator(persons)

   expect(result).toBe("drinks in liters =" + drinks + "pizzas = " + pizzas + " Total Price = " + totalPrice)
})
