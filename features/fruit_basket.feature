Feature: Fruit Basket
  
  In order to sell bananas ans apples
  As a fruit seller
  I want a basket to add and remove articles and to provide the total price

  Scenario Outline: Basket checkout with bananas and apples
    Given the price of a "banana" is <banana_price>
      And the price of a "apple" is <apple_price>
     When I add <nb_banana> "banana" to my basket
      And I add <nb_apple> "apple" to my basket
     Then I should checkout with a total amount of <total>

    Examples: 
      | banana_price | apple_price | nb_banana | nb_apple | total |
      | 15.0         | 10.0        |         1 |        1 | 25.0  |
      | 10.0         | 5.0         |         2 |        3 | 35.0  |

  Scenario: Error case -> adding unsuported fruit to a basket
    Given I add 1 "banana" to my basket
     When I add 1 "lemon" to my basket
     Then I should get the message "article not supported"

  Scenario: Error case -> basket with a negative quantity
    Given I add 1 "banana" to my basket
     When I remove 2 "banana" to my basket
     Then I should get the message "wrong quantity"
     When I remove 1 "apple" to my basket
     Then I should get the message "wrong quantity"
