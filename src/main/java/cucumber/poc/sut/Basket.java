package cucumber.poc.sut;

public class Basket {
	
	private double bananaPrice = 0;
	private double applePrice = 0;
	private double totalPrice = 0;
	private int nbBanana = 0;
	private int nbApple = 0;
    
	public void setPrice(String article, double price) {
		if (article.equals("banana")) bananaPrice = price;
		else if (article.equals("apple")) applePrice = price;
	}
	
    public void add(String article, int count) throws Exception { 
    	if (!article.equals("banana") && !article.equals("apple")) throw new Exception("article not supported");
    	double price = 0;
    	if (article.equals("banana")) {
    		price = bananaPrice;
    		nbBanana++;
    	}
		else if (article.equals("apple")) {
			price = applePrice;
			nbApple++;
		}
    	totalPrice += (count * price);
    }
    
    public void remove(String article, int count) throws Exception { 
    	if (!article.equals("banana") && !article.equals("apple")) throw new Exception("article not supported");
    	double price = 0;
    	if (article.equals("banana")) {
    		if (nbBanana - count < 0) throw new Exception("wrong quantity");
    		nbBanana--;
    		price = bananaPrice;
    	}
		else if (article.equals("apple")) {
    		if (nbApple - count < 0) throw new Exception("wrong quantity");
    		nbApple--;
			price = applePrice;
		}
    	totalPrice -= (count * price);
    }

    public double total() { 
        return totalPrice;
    }
    
}