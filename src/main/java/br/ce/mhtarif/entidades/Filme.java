package br.ce.mhtarif.entidades;

public class Filme {
	private int estoque;
	private int preco;
	
	public void setEstoque(int arg1) {
		this.estoque=arg1;
	}
	

	public int getEstoque() {
		return estoque;
	}

	public void setAluguel(int arg1) {
		this.preco = arg1;
	}
	
	public int getAluguel() {
		return preco;
	}

}
