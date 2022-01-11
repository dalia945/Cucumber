package testRunner;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions
        (
        
                
                features = ".\\src\\main\\resorces\\Features\\orgLogin.feature",
                glue ="stepDefenitions",
                	plugin= {"pretty", "html:test-output"},
                monochrome = true,
                tags = {"@tc_3"}
//                tags = {"@tc_1" , "@tc_2"},//AND operation
//                tags = {"@tc_1,@tc_2"}//Or operation
//                tags = {"~@tc_1"}//not operation
//               dryRun = true
                
                
                
        
        )



public class TestRun {

}