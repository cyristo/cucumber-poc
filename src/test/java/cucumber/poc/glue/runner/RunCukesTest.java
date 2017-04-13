package cucumber.poc.glue.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin ={"pretty", "html:out.html"}, 
		//glue =" nicebank",
		features ="features")
public class RunCukesTest {
}
