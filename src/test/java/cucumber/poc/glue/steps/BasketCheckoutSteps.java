package cucumber.poc.glue.steps;

import cucumber.api.java.en.*;
import cucumber.poc.sut.Basket;
import cucumber.api.PendingException;
import static org.junit.Assert.assertEquals;

public class BasketCheckoutSteps {
	
	private double bananaPrice = 0;
	private double applePrice = 0;
	private Basket basket = new Basket();
	
	@Given("^the price of a banana is (.+)$")
	public void the_price_of_a_banana_is(double price) throws Throwable {
		bananaPrice = price;
	}

	@Given("^the price a an apple is (.*)$")
	public void the_price_a_an_apple_is(double price) throws Throwable {
		applePrice = price;
	}

	@When("^I add (\\d+) banana to my basket$")
	public void i_add_banana_to_my_basket(int nb) throws Throwable {
		basket.add(nb, bananaPrice);
	}

	@When("^I add (\\d+) apple to my basket$")
	public void i_add_to_my_basket(int nb) throws Throwable {
		basket.add(nb, applePrice);
	}

	@When("^I can checkout with a total amount of (.+)$")
	public void i_can_checkout_with_a_total_amount_of(double total) throws Throwable {
		assertEquals(total, basket.total(), 0);
	}

}
