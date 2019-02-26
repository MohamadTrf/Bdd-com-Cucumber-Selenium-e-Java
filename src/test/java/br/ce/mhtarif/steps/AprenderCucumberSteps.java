package br.ce.mhtarif.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.ce.mhtarif.converters.DataConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class AprenderCucumberSteps {
	
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("qlqr coisa!");
	}

	@Quando("^executá-los")
	public void executálo() throws Throwable {
	}

	@Então("^especificação deve finalizar com sucesso$")
	public void especificaçãoDeveFinalizarComSucesso() throws Throwable {   
	
	}

	private int contador = 0;
	
	@Dado("^que o valor do contador Ã© (\\d+)$")
	public void queOValorDoContador(int arg1) throws Throwable {
		contador = arg1;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
		contador = contador + arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int arg1) throws Throwable {
		Assert.assertEquals(arg1, contador);
	}
	
	Date entrega = new Date();
	
	@Dado("^que o prazo é dia (.*)$")
	public void queOPrazoéDia(@Transform(DataConverter.class)  Date data) throws Throwable {
		entrega = data;
		System.out.println(entrega);
	}

	@Quando("^a entregar atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregarAtrasarEmDias(int diaAtrasado, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, diaAtrasado);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, diaAtrasado);
		}
		entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String dataAtrasada) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(dataAtrasada, dataFormatada);
	}

	@Dado("^que o ticket ( especial)? é (A. \\d{3})$")
	public void queOTicketéAF(String tipo,int arg1) throws Throwable {
   
	}

	@Dado("^que o valor da passagem é R\\$ (.*) $")
	public void queOValorDaPassageméR$(Double numero) throws Throwable {
	    System.out.println(numero);
	}

	@Dado("^que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroé(String arg1) throws Throwable {
	    
	}

	@Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroé(int arg1, int arg2) throws Throwable {
	    
	}

	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	    
	}

	@Então("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {

	}

	
}
	
