"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

const getPizzas = require("./handlers/get-pizzas.js"); // импорт обработчика для получения пицц
const getOrders = require("./handlers/get-orders.js"); // импорт обработчика для получения заказов
const createOrder = require("./handlers/create-order.js"); // импорт обработчика создание заказа
const deleteOrder = require("./handlers/delete-order.js"); // импорт обработчика удаление заказа
const updateOrder = require("./handlers/update-order.js"); // импорт обработчика изменения заказа
const updateDeliveryStatus = require("./handlers/update-delivery-status.js"); // импорт обработчика изменения статуса заказа

api.get("/", (request) => {
  // возращает обработчик для базового пути
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Привет после одной секунды");
    }, 1000);
  });
});

api.get("/pizzas", () => {
  // заменит функцию ввыше при другом путе
  return getPizzas();
});

api.get(
  "/pizzas/{id}",
  (request) => {
    // добавит маршрут для поиска по idz
    return getPizzas(request.pathParams.id);
  },
  {
    error: 404, // код не успешной обработки запроса
  }
);

api.get(
  "/orders",
  (request) => {
    return getOrders();
  },
  {
    error: 400,
  }
);

api.get(
  "/orders/{id}",
  (request) => {
    return getOrders(request.pathParams.id);
  },
  {
    error: 400,
  }
);

api.post(
  "/orders", // добавит маршрут для вывода заказов
  (request) => {
    return createOrder(request.body);
  },
  {
    succes: 201, // код успешной обработки запроса
    error: 400, // код не успешной обработки запроса
  }
);

api.put(
  "/orders/{id}",
  (request) => {
    return updateOrder(request.pathParams.id, request.body);
  },
  {
    error: 400, // код не успешной обработки запроса
  }
);

api.delete(
  "/orders/{id}",
  (request) => {
    return deleteOrder(request.pathParams.id);
  },
  {
    succes: 200, // код успешной обработки запроса
    error: 400, // код не успешной обработки запроса
  }
);

api.post(
  "/delivery",
  (request) => {
    updateDeliveryStatus(request.body);
  },
  {
    succes: 200, // код успешной обработки запроса
    error: 400, // код не успешной обработки запроса
  }
);

module.exports = api;
