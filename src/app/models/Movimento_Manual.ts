import { CurrencyPipe } from "@angular/common";
import { NgModel } from '@angular/forms';
import { Input } from '@angular/core';

 export class Movimento_Manual{
    DAT_MES: Number;
    DAT_ANO: Number;
    NUM_LANCAMENTO: Number;
    COD_PRODUTO: Number;
    COD_COSIF: Number;
    DES_DESCRICAO: String;
    DAT_MOVIMENTO: Number;
    COD_USUARIO: Number;
    VAL_VALOR: Number

    constructor(){
        this.DAT_MES = 0;
        this.DAT_ANO = 0;
        this.NUM_LANCAMENTO = 0;
        this.COD_PRODUTO = 0;
        this.COD_COSIF = 0;
        this.DES_DESCRICAO = "";
        this.DAT_MOVIMENTO = 0;
        this.COD_USUARIO = 0;
        this.VAL_VALOR = 0
    }
}