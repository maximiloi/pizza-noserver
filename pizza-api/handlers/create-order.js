"use strict";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const rp = require("minimal-request-promise");

function createOrder(request) {
  if (!request || !request.pizza || !request.address) {
    // если в нет объекта order и в нем нет id пиццы и адреса клиента , выдать ошибку
    throw new Error("Проверте заказ, укажите пиццу или адрес заказа");
  }

  return rp
    .post("https://some-like-it-hot.effortless-serverless.com/delivery", {
      headers: {
        Authorization: "aunt-marias-pizzeria-1234567890",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        pickupTime: "15.34pm",
        pickupAddress: "Aunt Maria Pizzeria",
        deliveryAddress: request.address,
        webhookUrl:
          "https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/delivery",
      }),
    })
    .then((rawResponse) => JSON.parse(rawResponse.body))
    .then((response) => {
      return docClient
        .put({
          TableName: "pizza-orders",
          Item: {
            orderId: response.deliveryId,
            pizza: request.pizza,
            address: request.address,
            orderStatus: "pending",
          },
        })
        .promise();
    })
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
