"use strict";

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateDeliveryStatus(request) {
  if (!request.deliveryId || !request.status) {
    throw new Error("Status and delivery ID are request");
  }

  return docClient
    .update({
      TableName: "pizza-orders",
      Key: {
        orderId: request.deliveryId,
      },
      AttributeUpdates: {
        deliveryStatis: {
          Action: "PUT",
          Value: request.status,
        },
      },
    })
    .promise()
    .then(() => {
      return {};
    });
}

module.exports = updateDeliveryStatus;
