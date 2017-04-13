package cucumber.poc.glue.steps;

import cucumber.api.java.en.*;
import cucumber.poc.sut.Basket;
import cucumber.api.PendingException;
import static org.junit.Assert.assertEquals;

public class BasketCheckoutSteps {
	
	private Basket basket = new Basket();
	private String errorMessage = null;
	
	@Given("^the price of a banana is (.+)$")
	public void the_price_of_a_banana_is(double price) throws Throwable {
		if (basket == null) basket = new Basket();
		basket.setPrice("banana", price);
	}

	@Given("^the price a an apple is (.*)$")
	public void the_price_a_an_apple_is(double price) throws Throwable {
		if (basket == null) basket = new Basket();
		basket.setPrice("apple", price);
	}

	@When("^I add ([^\"]*) \"([^\"]*)\" to my basket$")
	public void i_add_to_my_basket(String nb, String article) throws Throwable {
		if (basket == null) basket = new Basket();
		try {
			basket.add(article, new Integer(nb));
		} catch (Exception e) {
			errorMessage = e.getMessage();
		}
	}
	
	@When("^I remove ([^\"]*) \"([^\"]*)\" to my basket$")
	public void i_remove_to_my_basket(String nb, String article) throws Throwable {
		if (basket == null) basket = new Basket();
		try {
			basket.remove(article, new Integer(nb));
		} catch (Exception e) {
			errorMessage = e.getMessage();
		}
	}

	@When("^I can checkout with a total amount of (.+)$")
	public void i_can_checkout_with_a_total_amount_of(double total) throws Throwable {
		assertEquals(total, basket.total(), 0);
	}
	
	@Given("^I have an active basket with (\\d+) banana and (\\d+) apple$")
	public void i_have_an_active_basket_with_banana_and_apple(int nbBanana, int nbApple) throws Throwable {
		basket = new Basket();
		basket.setPrice("banana", 10);
		basket.add("banana",nbBanana);
		basket.setPrice("apple", 10);
		basket.add("apple",nbApple);
	}

	@Then("^I get the message \"([^\"]*)\"$")
	public void i_get_the_message(String message) throws Throwable {
		assertEquals(errorMessage, message);
	}

}
