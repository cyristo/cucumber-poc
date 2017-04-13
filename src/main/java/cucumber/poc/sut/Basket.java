package cucumber.poc.sut;

public class Basket {
	
	private double bananaPrice = 0;
	private double applePrice = 0;
	private double totalPrice = 0;
    
    public void add(int count, double price) { 
    	totalPrice += (count * price);
    }

    public double total() { 
        return totalPrice;
    }
    
}