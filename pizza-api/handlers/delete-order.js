"use strict";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteOrder(orderId) {
  return docClient
    .delete({
      TableName: "pizza-orders",
      Key: { orderId: orderId },
    })
    .promise()
    .then((result) => {
      console.log("Заказ удален", result);
      return result;
    })
    .catch((deleteError) => {
      console.log("Заказ не удален", deleteError);
      throw deleteError;
    });
}

module.exports = deleteOrder;
