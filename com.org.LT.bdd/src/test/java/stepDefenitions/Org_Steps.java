package stepDefenitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Org_Steps {
	WebDriver driver;
//	Logger log;
	@Given("user launch the URL {string} in chrome browser")
	public void launchApp(String url) {
	   WebDriverManager.chromedriver().setup();
	   driver = new ChromeDriver();
	   driver.manage().window().maximize();
	   driver.get(url);
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//	   log = Logger.getLogger("LT_Logger");
//	    PropertyConfigurator.configure("./log4j.properties");
	}

	@When("user enters the username {string} and password {string}")
	public void enterCreds(String UN, String pwd) {
//		log.info("entering username");
		
		driver.findElement(By.id("txtUsername")).sendKeys(UN);
//		log.info("entering passwoprd");
		driver.findElement(By.id("txtPassword")).sendKeys(pwd);
	}

	@When("user clicks on login button")
	public void clickLogin() throws InterruptedException {
		driver.findElement(By.id("btnLogin")).click();
		Thread.sleep(3000);
	}
	@When("user enters the username {string} and password {string} for nop")
	public void enterUn(String UN, String pwd) {
		driver.findElement(By.id("Email")).clear();
		driver.findElement(By.id("Email")).sendKeys(UN);
		driver.findElement(By.id("Password")).clear();
		driver.findElement(By.id("Password")).sendKeys(pwd);
	}

	@When("user clicks on login button for nop")
	public void clickLoginbtn() throws InterruptedException {
		driver.findElement(By.tagName("button")).click();
		Thread.sleep(3000);
	}

	@Then("user must able to see the title {string}")
	public void user_must_able_to_see_the_title(String title) throws InterruptedException {
	  String actTitle= driver.getTitle();
	  System.out.println("title is:"+ actTitle);
	  Assert.assertEquals(title, actTitle);
	  Thread.sleep(3000);
	   
	    
	}
	@Then("user selects customer menu")
	public void custmenu() throws InterruptedException {
		Thread.sleep(2000);
//		driver.findElement(By.xpath("(//a[@class='nav-link active']//i)[2]")).click();
		driver.findElement(By.xpath("html[1]/body[1]/div[3]/aside[1]/div[1]/div[4]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@href='/Admin/Customer/List']//i[1]")).click();
		
		
//		driver.findElement(By.xpath("//i[contains(@class,'fa-plus toggle-icon')]")).click();
	}
	@Then("user performs search operation")
	public void search() {
		driver.findElement(By.id("SearchEmail")).sendKeys("admin@yourstore.com");
		driver.findElement(By.id("search-customers")).click();
		WebElement SearchResult =driver.findElement(By.xpath("//td[text()='admin@yourStore.com']"));
		String text=SearchResult.getText();
		System.out.println("text is:"+ text);
		Assert.assertTrue(text.contains("admin"));
	}

	@Then("user clicks on adcustomer and enter the details")
	public void custdetails() {
		driver.findElement(By.xpath("//a[@class='btn btn-primary']")).click();
		driver.findElement(By.id("Email")).sendKeys("acrgdhtf@gmail.com");
		driver.findElement(By.id("Password")).sendKeys("vbnnn");
		driver.findElement(By.id("FirstName")).sendKeys("ghjjj");
		driver.findElement(By.id("LastName")).sendKeys("hghgjhhj");
		driver.findElement(By.id("Gender_Male")).click();
		driver.findElement(By.id("Company")).sendKeys("lnt");
		driver.findElement(By.name("save")).click();
	}
	

}
