function deleteOrder(id) {
  if (!id) {
    // если в нет id заказа, выдать ошибку
    throw new Error("Заказа №${id} не существует");
  }
  return {};
}

module.exports = deleteOrder;
