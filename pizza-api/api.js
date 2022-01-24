"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

const getPizzas = require("./handlers/get-pizzas.js"); // импорт обработчика для получения пицц
const createOrder = require("./handlers/create-order.js"); // импорт обработчика создание заказа

api.get("/", () => "Это пицца Api"); // возращает обработчик для базового пути

api.get("/pizzas", () => {
  // заменит функцию ввыше при другом путе
  return getPizzas();
});

api.get(
  "/pizzas/{id}", // добавит маршрут для поиска по id
  (request) => {
    return getPizzas(request.pathParams.id);
  },
  {
    error: 404, // код не успешной обработки запроса
  }
);

api.post(
  "/orders", // добавит маршрут для поиска по id
  (request) => {
    return createOrder(request.body);
  },
  {
    succes: 201, // код успешной обработки запроса
    error: 404, // код не успешной обработки запроса
  }
);

module.exports = api;
