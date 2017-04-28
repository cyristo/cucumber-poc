package cucumber.poc.glue.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin ={"pretty", 
				"html:target/cucumberReports/out.html", 
				"json:target/cucumberReports/out.json", 
				"junit:target/cucumberReports/junit.xml"}, 
		glue ="cucumber.poc.glue.steps",
		features ="src/test/resources/features/")

public class RunCukesTest {
}
