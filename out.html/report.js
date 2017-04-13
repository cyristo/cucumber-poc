$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fruit_basket.feature");
formatter.feature({
  "line": 1,
  "name": "Fruit Basket",
  "description": "\r\nIn order to sell bananas ans apples\r\nAs a fruit seller\r\nI want a basket to add and remove articles and to provide the total price",
  "id": "fruit-basket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Basket checkout with bananas and apples",
  "description": "",
  "id": "fruit-basket;basket-checkout-with-bananas-and-apples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the price of a \"banana\" is \u003cbanana_price\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the price of a \"apple\" is \u003capple_price\u003e",
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
  "id": "fruit-basket;basket-checkout-with-bananas-and-apples;",
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
      "id": "fruit-basket;basket-checkout-with-bananas-and-apples;;1"
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
      "id": "fruit-basket;basket-checkout-with-bananas-and-apples;;2"
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
      "id": "fruit-basket;basket-checkout-with-bananas-and-apples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Basket checkout with bananas and apples",
  "description": "",
  "id": "fruit-basket;basket-checkout-with-bananas-and-apples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the price of a \"banana\" is 15.0",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the price of a \"apple\" is 10.0",
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
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "15.0",
      "offset": 27
    }
  ],
  "location": "BasketCheckoutSteps.the_price_of_a_is(String,double)"
});
formatter.result({
  "duration": 121448874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 16
    },
    {
      "val": "10.0",
      "offset": 26
    }
  ],
  "location": "BasketCheckoutSteps.the_price_of_a_is(String,double)"
});
formatter.result({
  "duration": 122652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "banana",
      "offset": 9
    }
  ],
  "location": "BasketCheckoutSteps.i_add_to_my_basket(String,String)"
});
formatter.result({
  "duration": 101322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "apple",
      "offset": 9
    }
  ],
  "location": "BasketCheckoutSteps.i_add_to_my_basket(String,String)"
});
formatter.result({
  "duration": 59070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25.0",
      "offset": 38
    }
  ],
  "location": "BasketCheckoutSteps.i_can_checkout_with_a_total_amount_of(double)"
});
formatter.result({
  "duration": 2131855,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Basket checkout with bananas and apples",
  "description": "",
  "id": "fruit-basket;basket-checkout-with-bananas-and-apples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "the price of a \"banana\" is 10.0",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the price of a \"apple\" is 5.0",
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
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "10.0",
      "offset": 27
    }
  ],
  "location": "BasketCheckoutSteps.the_price_of_a_is(String,double)"
});
formatter.result({
  "duration": 130447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 16
    },
    {
      "val": "5.0",
      "offset": 26
    }
  ],
  "location": "BasketCheckoutSteps.the_price_of_a_is(String,double)"
});
formatter.result({
  "duration": 121012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "banana",
      "offset": 9
    }
  ],
  "location": "BasketCheckoutSteps.i_add_to_my_basket(String,String)"
});
formatter.result({
  "duration": 90656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 6
    },
    {
      "val": "apple",
      "offset": 9
    }
  ],
  "location": "BasketCheckoutSteps.i_add_to_my_basket(String,String)"
});
formatter.result({
  "duration": 89426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35.0",
      "offset": 38
    }
  ],
  "location": "BasketCheckoutSteps.i_can_checkout_with_a_total_amount_of(double)"
});
formatter.result({
  "duration": 76709,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Error case -\u003e adding unsuported fruit to a basket",
  "description": "",
  "id": "fruit-basket;error-case--\u003e-adding-unsuported-fruit-to-a-basket",
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
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "BasketCheckoutSteps.i_have_an_active_basket_with_banana_and_apple(int,int)"
});
formatter.result({
  "duration": 212898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 6
    },
    {
      "val": "lemon",
      "offset": 9
    }
  ],
  "location": "BasketCheckoutSteps.i_add_to_my_basket(String,String)"
});
formatter.result({
  "duration": 138650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "article not supported",
      "offset": 19
    }
  ],
  "location": "BasketCheckoutSteps.i_get_the_message(String)"
});
formatter.result({
  "duration": 108705,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Error case -\u003e basket with a negative quantity",
  "description": "",
  "id": "fruit-basket;error-case--\u003e-basket-with-a-negative-quantity",
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
  "name": "I get the message \"wrong quantity\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "BasketCheckoutSteps.i_have_an_active_basket_with_banana_and_apple(int,int)"
});
formatter.result({
  "duration": 143983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    },
    {
      "val": "banana",
      "offset": 12
    }
  ],
  "location": "BasketCheckoutSteps.i_remove_to_my_basket(String,String)"
});
formatter.result({
  "duration": 114448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong quantity",
      "offset": 19
    }
  ],
  "location": "BasketCheckoutSteps.i_get_the_message(String)"
});
formatter.result({
  "duration": 59480,
  "status": "passed"
});
});