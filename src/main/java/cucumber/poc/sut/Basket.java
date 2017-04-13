package cucumber.poc.sut;

public class Basket {
	
	private double bananaPrice = 0;
	private double applePrice = 0;
	private double totalPrice = 0;
    
	public void setPrice(String article, double price) {
		if (article == "banana") bananaPrice = price;
		else if (article == "apple") applePrice = price;
	}
	
    public void add(String article, int count) throws Exception { 
    	if (article != "banana" && article != "apple") throw new Exception("article not supported");
    	double price = 0;
    	if (article == "banana") price = bananaPrice;
		else if (article == "apple") price = applePrice;
    	totalPrice += (count * price);
    }

    public double total() { 
        return totalPrice;
    }
    
}