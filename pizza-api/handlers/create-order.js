const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function createOrder(request) {
  if (!request || !request.pizzaId || !request.address) {
    // если в нет объекта order и в нем нет id пиццы и адреса клиента , выдать ошибку
    throw new Error("Проверте заказ, укажите пиццу или адрес заказа");
  }
  return docClient
    .put({
      TableName: "pizza-orders",
      Item: {
        orderId: "some-id",
        pizza: request.pizza,
        address: request.address,
        orderStatus: "pending",
      },
    })
    .promise()
    .then((res) => {
      console.log("Заказ сохранен!", res);
      return res;
    })
    .catch((saveError) => {
      console.log("Ой, заказ не сохранен :(", saveError);
      throw saveError;
    });
}

module.exports = createOrder;
