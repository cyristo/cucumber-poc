package cucumber.poc.glue.steps;

import cucumber.api.java.en.*;
import cucumber.poc.sut.Basket;
import cucumber.api.PendingException;
import static org.junit.Assert.assertEquals;

public class FruitBasketSteps {
	
	private Basket basket = new Basket();
	private String errorMessage = null;
	
	@Given("^the price of a \"([^\"]*)\" is (.+)$")
	public void the_price_of_a_is(String article, double price) throws Throwable {
		if (basket == null) basket = new Basket();
		basket.setPrice(article, price);
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

	@Then("^I get the message \"([^\"]*)\"$")
	public void i_get_the_message(String message) throws Throwable {
		assertEquals(errorMessage, message);
	}

}
