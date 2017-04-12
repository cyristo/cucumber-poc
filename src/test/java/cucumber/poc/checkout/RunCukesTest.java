package cucumber.poc.checkout;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin ={"progress", "html:out.html"}, 
		//glue =" nicebank",
		features ="features")
public class RunCukesTest {
}
