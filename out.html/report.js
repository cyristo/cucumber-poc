$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout \u003ccount\u003e \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be \u003ctotal\u003ec",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "checkout;checkout-a-banana;",
  "rows": [
    {
      "cells": [
        "count",
        "total"
      ],
      "line": 9,
      "id": "checkout;checkout-a-banana;;1"
    },
    {
      "cells": [
        "1",
        "40"
      ],
      "line": 10,
      "id": "checkout;checkout-a-banana;;2"
    },
    {
      "cells": [
        "2",
        "80"
      ],
      "line": 11,
      "id": "checkout;checkout-a-banana;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout 1 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be 40c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the price of a \"banana\" is 40",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I checkout 2 \"banana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the total price should be 80c",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeC(int)"
});
formatter.result({
  "status": "skipped"
});
});