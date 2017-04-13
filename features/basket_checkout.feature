Feature: Basket Checkout
  
  In order to sell bananas ans apples
  As a fruit seller
  I want a basket that can add bananas and apples and provide the total amount for checkout

  Scenario Outline: Basket checkout with bananas and apples
    Given the price of a banana is <banana_price>
      And the price a an apple is <apple_price>
     When I add <nb_banana> banana to my basket
      And I add <nb_apple> apple to my basket
     Then I can checkout with a total amount of <total>

    Examples: 
      | banana_price | apple_price | nb_banana | nb_apple | total |
      | 15.0         | 10.0        |         1 |        1 | 25.0  |
      | 10.0         | 5.0         |         2 |        3 | 35.0  |

  Scenario: Error case -> adding unsuported fruit to a basket
    Given I have an active basket with bananas and apples
     When I add an lemon
     Then I get the message "article not supported"
