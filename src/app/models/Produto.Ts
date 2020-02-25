import { CurrencyPipe } from "@angular/common";
import { NgModel } from '@angular/forms';
import { Produto_Cosif } from './Produto_Cosif';

 export class Produto{
    COD_PRODUTO: Number;
    DES_PRODUTO: String;
    STA_STATUS: Number;
    PRODUTOS_COSIF: Produto_Cosif[];

    constructor()
    {
       this.PRODUTOS_COSIF = [];
    }
}