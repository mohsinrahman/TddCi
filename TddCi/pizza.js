module.exports = calculator

function calculator(persons) {

    if (persons === 0) {

      return 0;

    }

    else {

    const  drinks = persons / 2;
    const pizzas = persons / 3;

    const onePizza = 100;
    const totalPizzaPrice = 100 * pizzas;
    const oneLiter = 33.33;
    const toatlLiterPrice = 33.33 * drinks;
    const totalPrice = totalPizzaPrice + toatlLiterPrice;

    return "drinks in liters =" + drinks + "pizzas = " + pizzas + " Total Price = " + totalPrice;
    }

}
