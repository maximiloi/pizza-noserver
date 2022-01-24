"use strict";

const Api = require("claudia-api-builder");
const api = new Api();

api.get("/pizzas", () => {
  return ["Маргарита", "Наполетана", "Четыре Сыра", "Капричоза", "Пеперони"];
});

module.exports = api;
