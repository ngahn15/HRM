package hrm;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
//@CucumberOptions(features = "src/test/resources/features/kichbanlogin.feature")
@CucumberOptions(features = "src/test/resources/features", format = { "pretty", "html:target/cucumber",
		"json:target/cucumber.json" })
public class LoginRunner {

}
