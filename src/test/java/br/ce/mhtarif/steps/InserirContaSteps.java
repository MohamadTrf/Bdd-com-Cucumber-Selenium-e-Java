package br.ce.mhtarif.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;


public class InserirContaSteps {
	private WebDriver driver;
 
	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
	    driver = new ChromeDriver();
	    driver.get("https://srbarriga.herokuapp.com/login");
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String user) throws Throwable {
	    driver.findElement(By.id("email")).sendKeys(user);
	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String senha) throws Throwable {
	    driver.findElement(By.name("senha")).sendKeys(senha);
	}

	@Quando("^seleciono entrar$")
	 public void selecionoEntrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
	 String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	 Assert.assertEquals("Bem vindo, hamudeCcumber!", texto);
	}

	@Quando("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
	    driver.findElement(By.linkText("Contas")).click();
	}

	@Quando("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
	    driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String conta) throws Throwable {
	    driver.findElement(By.id("nome")).sendKeys(conta);
	}

	@Quando("^seleciono salvar$")
	public void selecionoSalvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String arg1) throws Throwable {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
	    System.out.println(texto);
	    System.out.println(arg1);
	    Assert.assertEquals(arg1, texto);
	}
	
	@After(order = 1 , value= {"@funcionais"} )
	public void screenshot(Scenario cenario)  {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE); 
		try {
			FileUtils.copyFile(file, new File("taget/screenshot/nome.jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order = 0 , value= {"@funcionais"})
	public void fecharBrowser() {
		driver.quit();
		
	}
//	


	
}
