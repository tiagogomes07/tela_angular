import { Component, OnInit,Input } from '@angular/core';
import { Movimento_Manual } from '../models/Movimento_Manual';
import { MovimentoService } from '../services/movimento.service';
import { Produto_Cosif} from '../models/Produto_Cosif';
import { Produto} from '../models/Produto';
import { element } from 'protractor';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
   public disabled: boolean = true;
   public movimento_Manual: Movimento_Manual = new Movimento_Manual();
   public movimentoService: MovimentoService;
   produtos: Produto[];
   produtoSelecionado: Produto;

  constructor() {
     this.produtoSelecionado = new Produto(); 
  }

  dropdownLoad(){

    this.produtos = [
      { COD_PRODUTO : 1 , DES_PRODUTO : "MGLU3", STA_STATUS:1, PRODUTOS_COSIF:  [
        { COD_PRODUTO :1, COD_COSIF:100, COD_CLASSIFICACAO: 123,  STA_STATUS:1 },
        { COD_PRODUTO :1, COD_COSIF:110, COD_CLASSIFICACAO: 123,  STA_STATUS:1 }
       ] },
      { COD_PRODUTO : 2 , DES_PRODUTO : "ITSA4", STA_STATUS:1,PRODUTOS_COSIF:   [
        { COD_PRODUTO :2, COD_COSIF:200, COD_CLASSIFICACAO: 123,  STA_STATUS:1 },
        { COD_PRODUTO :2, COD_COSIF:210, COD_CLASSIFICACAO: 123,  STA_STATUS:1 }
       ] 
    },
   ]



  }
  
  ngOnInit(): void {
    this.dropdownLoad();
  }

  onSelectedDropBoxProduto(event: any){
    console.log('event.target',event.target.value);
    console.log(event.target.selectedOptions[0].text);
    let codProduto = event.target.value;
    this.produtoSelecionado = this.produtos.find( element => element.COD_PRODUTO == codProduto);
    console.log('this.produtoSelecionado',this.produtoSelecionado);
  }

  onSelectedDropBox(event: any){
    console.log('event.target',event.target.value);
    console.log(event.target.selectedOptions[0].text);
  }

  habilitarCampos(){
    this.disabled = !this.disabled; 
  }

  onBind(valorDigitado: Object,nomeProriedade : string){
    this.movimento_Manual[nomeProriedade]= valorDigitado;
    console.log('nomeProriedade alterado para',this.movimento_Manual[nomeProriedade]); 
  }

  incluirDados(){
    console.log('movimento_Manual',this.movimento_Manual);
  }

}
