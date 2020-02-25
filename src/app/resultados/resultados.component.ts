import {Component, OnInit } from '@angular/core';
//import {ProdutoService} from '../services/produto.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  movimentos : any[]

  constructor() {

    this.movimentos = [
      {ano:2015, mes: 12, codigo:'10', descricaoProduto:'IBRX100',
      lancamento:'1',descriacao:'muito bom',valor: 'R$ 10,00' },

      {ano:2019, mes: 12, codigo:'11', descricaoProduto:'PETR4',
      lancamento:'1',descriacao:'muito bom',valor: 'R$ 10,00' }
    ] ;   
   }



  ngOnInit(): void {
  
    
  }

}
