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

	@When("^I add (\\d+) banana to my basket$")
	public void i_add_banana_to_my_basket(int nb) throws Throwable {
		if (basket == null) basket = new Basket();
		basket.add("banana", nb);
	}

	@When("^I add (\\d+) apple to my basket$")
	public void i_add_to_my_basket(int nb) throws Throwable {
		if (basket == null) basket = new Basket();
		basket.add("apple", nb);
	}

	@When("^I can checkout with a total amount of (.+)$")
	public void i_can_checkout_with_a_total_amount_of(double total) throws Throwable {
		assertEquals(total, basket.total(), 0);
	}
	
	@Given("^I have an active basket with bananas and apples$")
	public void i_have_an_active_basket_with_bananas_and_apples() throws Throwable {
		basket = new Basket();
		basket.setPrice("banana", 10);
		basket.add("banana",1);
		basket.setPrice("apple", 10);
		basket.add("apple",1);
	}

	@When("^I add an lemon$")
	public void i_add_an_lemon() throws Throwable {
		try {
			basket.add("lemon",1);
		} catch (Exception e) {
			errorMessage = e.getMessage();
		}
	}

	@Then("^I get the message \"([^\"]*)\"$")
	public void i_get_the_message(String message) throws Throwable {
		assertEquals(errorMessage, message);
	}

}
