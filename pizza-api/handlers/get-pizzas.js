const pizzas = require("../data/pizzas.json"); // импортировать пицы из каталога

function getPizzas(pizzaId) {
  // функция получения пиццы
  if (!pizzaId) return pizzas; // Если идентификатор пицы не указан, вернуть полный списсок пицц.(Для вывода по запросам Вег-Мясо)

  const pizza = pizzas.find((pizza) => {
    // Иначе вывести пиццы по индентификатору
    return pizza.id == pizzaId; //
  });

  if (pizza) {
    return pizza;
  }

  throw new Error("Пицца по запросу не найдена");
}

module.exports = getPizzas;
