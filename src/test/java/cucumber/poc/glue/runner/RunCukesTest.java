package cucumber.poc.glue.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin ={"pretty", "html:out.html", "json:out.json", "junit:junit.xml"}, 
		glue ="cucumber.poc.glue.steps",
		features ="features/")

public class RunCukesTest {
}
