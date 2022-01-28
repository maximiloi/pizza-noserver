"use strict";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(orderId, options) {
  if (!options || !options.pizza || !options.address) {
    throw new Error("Проверте номера заказа или укажите что сделать с заказом");
  }
  return {
    message: "Заказ № ${id}, изменен",
  };
}

module.exports = updateOrder;
