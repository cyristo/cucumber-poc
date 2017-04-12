package cucumber.poc.checkout;

import cucumber.api.java.en.*;
import cucumber.poc.sut.Checkout;
import cucumber.api.PendingException;
import static org.junit.Assert.assertEquals;

public class CheckoutSteps {
	
	private int bananaPrice = 0;
	private Checkout checkout;
	
    @Given("^the price of a \"(.*?)\" is (\\d+)c$")
    public void thePriceOfAIsC(String name, int price) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
         bananaPrice = price;
    }

    @When("^I checkout (\\d+) \"(.*?)\"$")
    public void iCheckout(int itemCount, String itemName) throws Throwable {
    	checkout = new Checkout(); 
    	checkout.add(itemCount, bananaPrice);
    }

    @Then("^the total price should be (\\d+)c$")
    public void theTotalPriceShouldBeC(int total) throws Throwable {
        assertEquals(total, checkout.total());
    }
}