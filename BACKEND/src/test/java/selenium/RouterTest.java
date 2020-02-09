package selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.assertNotNull;
import static org.testng.AssertJUnit.assertEquals;


public class RouterTest {

    private WebDriver browser;

    private  Actions builder;


    @BeforeMethod
    public void setUp() {
        // instantiate chrome browser
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        browser = new ChromeDriver();
        builder = new Actions(browser);
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        // instantiate firefox browser
//        System.setProperty("webdriver.gecko.driver","src/test/resources/geckodriver");
//        FirefoxOptions firefoxOptions = new FirefoxOptions();
//        firefoxOptions.setCapability("marionette",true);


        // browser = new FirefoxDriver(firefoxOptions);

        //maximize window
        browser.manage().window().maximize();

        //navigate
        browser.navigate().to("http://localhost:8081");


    }
    // 3.12
    @Test
    public void Test1() {
        //this.browser.get("http://localhost:8081");

        WebElement element = this.browser.findElement(By.xpath("//*[@id=\"email\"]"));
        assertNotNull(element);
        element.sendKeys("patienttim27@gmail.com");
        WebElement element2 = this.browser.findElement(By.xpath("//*[@id=\"password\"]"));
        element2.sendKeys("Patient123");
        WebElement button = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-login/div/div/div/div/mat-card/form/button"));
        button.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button2 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button"));
        button2.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button3 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav/div/mat-nav-list/a[4]/div"));
        button3.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button4 = this.browser.findElement(By.xpath("/html/body/app-root/mat-sidenav-container/mat-sidenav-content/app-clinics-page/button[2]"));
        button4.click();
        browser.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement button5 = this.browser.findElement(By.xpath("//*[@id=\"mat-dialog-0\"]/app-predef-examination/mat-dialog-actions/button"));
        button5.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        button4.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        WebElement button6 = this.browser.findElement(By.xpath("//*[@id=\"mat-dialog-1\"]/app-predef-examination/table/tbody/tr[2]/td[8]/button"));
        button6.click();
        browser.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }


    @AfterMethod
    public void tearDown() {
        browser.close();
    }
}
