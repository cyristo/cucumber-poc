$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("basket_checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Basket Checkout",
  "description": "\r\nIn order to sell bananas ans apples\r\nAs a fruit seller\r\nI want a basket that can add bananas and apples and provide the total amount for checkout",
  "id": "basket-checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Basket checkout with bananas and apples",
  "description": "",
  "id": "basket-checkout;basket-checkout-with-bananas-and-apples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the price of a banana is \u003cbanana_price\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the price a an apple is \u003capple_price\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \u003cnb_banana\u003e \"banana\" to my basket",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I add \u003cnb_apple\u003e \"apple\" to my basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can checkout with a total amount of \u003ctotal\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "basket-checkout;basket-checkout-with-bananas-and-apples;",
  "rows": [
    {
      "cells": [
        "banana_price",
        "apple_price",
        "nb_banana",
        "nb_apple",
        "total"
      ],
      "line": 15,
      "id": "basket-checkout;basket-checkout-with-bananas-and-apples;;1"
    },
    {
      "cells": [
        "15.0",
        "10.0",
        "1",
        "1",
        "25.0"
      ],
      "line": 16,
      "id": "basket-checkout;basket-checkout-with-bananas-and-apples;;2"
    },
    {
      "cells": [
        "10.0",
        "5.0",
        "2",
        "3",
        "35.0"
      ],
      "line": 17,
      "id": "basket-checkout;basket-checkout-with-bananas-and-apples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Basket checkout with bananas and apples",
  "description": "",
  "id": "basket-checkout;basket-checkout-with-bananas-and-apples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the price of a banana is 15.0",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the price a an apple is 10.0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add 1 \"banana\" to my basket",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I add 1 \"apple\" to my basket",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can checkout with a total amount of 25.0",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Basket checkout with bananas and apples",
  "description": "",
  "id": "basket-checkout;basket-checkout-with-bananas-and-apples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the price of a banana is 10.0",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the price a an apple is 5.0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add 2 \"banana\" to my basket",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I add 3 \"apple\" to my basket",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can checkout with a total amount of 35.0",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Error case -\u003e adding unsuported fruit to a basket",
  "description": "",
  "id": "basket-checkout;error-case--\u003e-adding-unsuported-fruit-to-a-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I have an active basket with 1 banana and 1 apple",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I add 1 \"lemon\" to my basket",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I get the message \"article not supported\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "Error case -\u003e basket with a negative quantity",
  "description": "",
  "id": "basket-checkout;error-case--\u003e-basket-with-a-negative-quantity",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I have an active basket with 1 banana and 1 apple",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I remove 2 \"banana\" to my basket",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I get the message \"article not supported\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});