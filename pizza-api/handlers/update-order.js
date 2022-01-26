function updateOrder(id, updates) {
  if (!id || !updates) {
    // если в нет id и свойства, что делать с заказом, выдать ошибку
    throw new Error("Проверте номера заказа или укажите что сделать с заказом");
  }
  return {
    message: "Заказ № ${id}, изменен",
  };
}

module.exports = updateOrder;
