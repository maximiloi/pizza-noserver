function createOrder() {
  if (!order || !order.pizzaId || !order.addres) {
    // если в нет объекта order и в нем нет id пиццы и адреса клиента , выдать ошибку
    throw new Error("Проверте заказ, укажите пиццу или адрес заказа");
  }
  return {};
}

module.exports = createOrder;
