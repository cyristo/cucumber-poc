Feature: Basket Checkout

  Scenario Outline: Basket checkout with bananas and apples
    Given the price of a banana is <banana_price>
      And the price a an apple is <apple_price>
     When I add <nb_banana> banana to my basket
      And I add <nb_apple> apple to my basket
      And I can checkout with a total amount of <total>

    Examples: 
      | banana_price | apple_price | nb_banana | nb_apple | total |
      | 15.0         | 10.0        |         1 |        1 | 25.0  |
      | 10.0         | 5.0         |         2 |        3 | 35.0  |