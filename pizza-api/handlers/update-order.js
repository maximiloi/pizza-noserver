"use strict";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(orderId, options) {
  if (!options || !options.pizza || !options.address)
    throw new Error("Проверте номера заказа или укажите что сделать с заказом");

  return docClient
    .update({
      TableName: "pizza-orders",
      Key: { orderId: orderId },
      UpdateExpression: "set pizza = :p, addres = :a",
      ExpressionAttributeValues: {
        ":p": options.pizza,
        ":a": options.address,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((result) => {
      console.log("Заказ обновлен", result);
      return result.Attributes;
    })
    .catch((updateError) => {
      console.log("С заказом что то не так", updateError);
      throw updateError;
    });
}

module.exports = updateOrder;
