import { Component, OnInit } from '@angular/core';
import { Banco } from '../shared/banco.model'
import {  BancoR } from '../shared/bancoR.model'
import { MODELOS, REFRIGERANTE } from './banco-mock'
import { format } from 'url';
declare function encodeURIComponent(uriComponent: any): string; 
@Component({
  selector: 'app-faceindex',
  templateUrl: './faceindex.component.html',
  styleUrls: ['./faceindex.component.css']
})
export class FaceindexComponent implements OnInit {
  public mostraLogo: number = 1
  public visivel: string = 'invisible'
  public textowhatsap:string 
  public valorTotal: number = 0
  
  public quantidade: number = 0

  public coca:number = 0
  public gua: number = 0
  public fanl:number = 0
  public fang:number = 0

  

  public salve: any = [
    {id:'0',slv:'0'},
    {id:'1',slv:'0'},
    {id:'2',slv:'0'},
    {id:'3',slv:'0'},
    {id:'4',slv:'0'},
    {id:'5',slv:'0'},
    {id:'6',slv:'0'},
    {id:'7',slv:'0'},
    {id:'8',slv:'0'},
    {id:'9',slv:'0'},
    {id:'10',slv:'0'},
    {id:'12',slv:'0'},
    {id:'13',slv:'0'},
    {id:'14',slv:'0'},

  ]
  public quant: any =[
    {qt:'00'},
    {qt:'25'},
    {qt:'50'},
    {qt:'75'},
    {qt:'100'},
    {qt:'150'},
    {qt:'200'},
    {qt:'250'},
    {qt:'300'},
    {qt:'350'},
    {qt:'400'},
    {qt:'450'},
    {qt:'500'},
    {qt:'550'},
    {qt:'600'},
    {qt:'650'},
    {qt:'700'},
    {qt:'750'},
    {qt:'800'},
  ]

  public nome: string = ''
  public data: string = ''
  public hora: string = 'Hora'
  public min: string = 'Min'
  public pay: string = ''
  public tipo: string = ''
  public rua: string = ''
  public complemento: string = ''
  public bairro: string = ''
  public num: string = ''
  public unidade: string = ''
  public troco:string = ''
  public trocoSN: string = ''
  public diaSemana:string = ''
  public ds:number 

  

  //Controles de liberação dos campos
  public nomeValido: boolean
  public dataValido: boolean
  public horaValido: boolean
  public minValido: boolean
  public tipoValido: boolean
  public ruaValido: boolean
  public complementoValido :boolean
  public bairroValido: boolean
  public numValido: boolean
  public payValido: boolean
  public unidadeValido: boolean
  public trocoValido: boolean
  public diaSemanaValido:Boolean
  public trocoSNValido:Boolean

  // Estado primitivo (Pristime)
  public nomeEp: boolean = true
  public dataEp: boolean = true
  public horaEp: boolean = true
  public minEp: boolean = true 
  public payEp: boolean = true 
  public tipoEp: boolean = true 
  public ruaEp:boolean = true 
  public complementoEp: boolean = true
  public bairroEp: boolean = true 
  public numEp: boolean = true 
  public unidadeEp: boolean = true
  public trocoEp: boolean = true
  public diaSemanaEp: boolean = true
  public trocoSNEp: boolean = true

  
  //Controla botão Confirmar pedido
  public formEstado: string = 'disabled'
  public corBotao: string = 'btn-secondary'

  public modelo: Banco[] = MODELOS
  public refri: BancoR[] = REFRIGERANTE
  constructor() {

    setTimeout(()=>{   this.mostraLogo = 0;
    }, 2500);
    
   }
  ngOnInit(){



  }
/*  --------------------- Salgados --------------------------------------------*/
  public maiorS(pega:number){
    if(this.quant[this.salve[pega].slv].qt >= 800){
      this.quant[this.salve[pega].slv].qt = '800'
      
    }else if(this.modelo[pega]){
      this.salve[pega].slv++
      this.modelo[pega].q = this.quant[this.salve[pega].slv].qt

      if(this.quant[this.salve[pega].slv].qt <= 100){
        this.quantidade =  this.quantidade + 25
      } else{
        this.quantidade =  this.quantidade + 50
      }
      this.total()
    }
  }
  public menorS(pega:number){
    if(this.quant[this.salve[pega].slv].qt <= 0){
      this.quant[this.salve[pega].slv].qt = '00'
    }else if(this.modelo[pega]){
      this.salve[pega].slv--
      this.modelo[pega].q = this.quant[this.salve[pega].slv].qt
      if(this.quant[this.salve[pega].slv].qt <= 75){
        this.quantidade =  this.quantidade - 25
      } else{
        this.quantidade =  this.quantidade - 50
      }
    }
    this.total()
  }



/* ---------------------- Refrigerante ---------------------------------------*/
  public  maiorR(pega:number){
  if(this.refri[pega].id == '0'){
    if(this.refri[pega].q =='9'){
      this.refri[pega].q = '9'

    }else{
      this.coca++
      this.refri[pega].q =  String(this.coca)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)

    }
  }else  if(this.refri[pega].id == '1'){
    if(this.refri[pega].q =='9'){
      this.refri[pega].q = '9'
    }else{
      this.gua++
      this.refri[pega].q =  String(this.gua)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }else  if(this.refri[pega].id == '2'){
    if(this.refri[pega].q =='9'){
      this.refri[pega].q = '9'
    }else{
      this.fanl++
      this.refri[pega].q =  String(this.fanl)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }else  if(this.refri[pega].id == '3'){
    if(this.refri[pega].q =='9'){
      this.refri[pega].q = '9'
    }else{
      this.fang++
      this.refri[pega].q =  String(this.fang)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }
  this.total()

  }
  public  menorR(pega:number){
  if(this.refri[pega].id == '0'){
    if(this.refri[pega].q =='0'){
      this.refri[pega].q = '0'
    }else{
      this.coca--
      this.refri[pega].q =  String(this.coca)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }else  if(this.refri[pega].id == '1'){
    if(this.refri[pega].q =='0'){
      this.refri[pega].q = '0'
    }else{
      this.gua--
      this.refri[pega].q =  String(this.gua)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }else  if(this.refri[pega].id == '2'){
    if(this.refri[pega].q =='0'){
      this.refri[pega].q = '0'
    }else{
      this.fanl--
      this.refri[pega].q =  String(this.fanl)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }else  if(this.refri[pega].id == '3'){
    if(this.refri[pega].q =='0'){
      this.refri[pega].q = '0'
    }else{
      this.fang--
      this.refri[pega].q =  String(this.fang)
      console.log(this.refri[pega].refri,':', this.refri[pega].q)
    }
  }
  this.total()
  }



/* ----------------------- form ----------------------------------------------*/
  total(){
    var taxa: number  = 0
    var total :number = this.quantidade * 0.40
    var totalc :number =  parseInt(this.refri[0].q) * 9
    var totalg :number =  parseInt(this.refri[1].q) * 7
    var totalfl :number =  parseInt(this.refri[2].q) * 5
    var totalfg :number =  parseInt(this.refri[3].q ) * 5
    if(this.tipo == 'Entregar pedido' && this.pay == 'Dinheiro' ){
      taxa = 10.00
    }if(this.tipo == 'Entregar pedido' && this.pay == 'Cartão' ){
      taxa = 10.00
    }
    this.valorTotal =  total + totalc + totalg + totalfl + totalfg + taxa

  

  }
  fUnidade(unidade: string): void{
    this.unidade = unidade
    this.unidadeEp = false
    if(this.unidade.length > 1){
      this.unidadeValido = true
    }else{
      this.unidadeValido = false
    }
    this.habilitaForm()
  }
  fNome(nome: string):void{ 
    this.nome = nome
    this.nomeEp = false
    //console.log(this.nome)
    if(this.nome.length > 1){
      this.nomeValido = true
    }else{
      this.nomeValido = false
    }
    this.habilitaForm()
  }
  fTrocoSN(trocosn: string):void{
  this.trocoSN = trocosn
  this.trocoSNEp = false
  console.log(this.trocoSN)
  if(this.trocoSN.length > 1){
    this.trocoSNValido = true
  }

}

  fTroco(troco:string):void{
    this.troco = troco
    this.trocoEp = false
    if(this.troco.length > 1){
      this.trocoValido = true
    }
    
    this.habilitaForm()
    

  }
  fDiaSemana(diaSemana:string):void{
    this.diaSemana = diaSemana
    this.diaSemanaEp = false


    if(this.diaSemana.length > 2){
      this.diaSemanaValido = true

    }else{
      this.diaSemanaValido = false
    }

      this.habilitaForm()

  }
  fData(data: Event):void{
    this.data = (<HTMLInputElement>data.target).value

    var d = new Date(this.data)
    this.diaSemana = d.getDay().toString()
    console.log(this.diaSemana)
    this.ds = parseInt(this.diaSemana)
    if(this.ds >= 0 && this.ds <= 4){
      this.ds = 1
    }

    //this.data = data
    this.dataEp = false
    var ano: any = this.data.substring(0,4)
    var mes: any = this.data.substring(5,7)  
    var dia: any = this.data.substring(8,10)  
    this.data =  `${dia}/${mes}/${ano}`
    console.log(this.data)
    if(this.data.length > 0){
      this.dataValido = true
    }else{
      this.dataValido = false
    }
    this.habilitaForm()
    


  }
  fHora(hora: string):void{
    this.hora =  hora
    this.horaEp = false
    console.log(this.hora)
    if(this.hora.length > 0){
      this.horaValido = true
    }else{
      this.horaValido = false
    }
    this.habilitaForm()
  

  } 
  fMin(min: string):void{
    this.min =  min
    this.minEp = false
    console.log(this.min)
    if(this.min.length > 0){
      this.minValido = true
    }else{
      this.minValido = false
    }
    this.habilitaForm()
  } 
  fPay(pay: string):void{
    this.pay = pay
    this.payEp = false

    if(this.pay == 'Cartão'){
      this.troco = 'Não'
    }
    if(this.pay.length > 2){
      this.payValido = true
      this.total()
    }else{
      this.payValido = false
    }

      this.total()
      this.habilitaForm()
  }
  fSelect(select: string):void{ 
    this.tipo = select
    this.tipoEp = false
    if(this.tipo.length > 2){
      this.tipoValido = true
    }else{
      this.tipoValido = false
    }
    
    if(this.tipo == 'Entregar pedido'){
      this.visivel = 'visible'
    }else{ 
      this.visivel = 'invisible'
     }
     this.habilitaForm()
  
    
  this.total()
  }
  fRua(rua: string):void{ 
    this.rua = rua
    this.ruaEp = false
   // console.log(this.rua)
    if(this.rua.length > 1){
      this.ruaValido = true
    }else{
      this.ruaValido = false
    }
    this.habilitaForm()
  }
  fComple(comple: string):void{ 
    this.complemento = comple
    this.complementoEp = false
    //console.log(this.complemento)
    if(this.complemento.length > 1){
      this.complementoValido = true
    }else{
      this.complementoValido = false
    }
    this.habilitaForm()
  }
  fBairro(bairro: string):void{ 
    this.bairro = bairro
    this.bairroEp = false
    //console.log(this.bairro)
    if(this.bairro.length > 1){
      this.bairroValido = true
    }else{
      this.bairroValido = false
    }
    this.habilitaForm()
  }
  fNum(num: string):void{ 
    this.num = num
    this.numEp = false
    //console.log(this.num)
    if(this.num.length > 1){
      this.numValido = true
    }else{
      this.numValido = false
    }
    this.habilitaForm()
  }
  habilitaForm(): void{
    if(this.tipo == 'Entregar pedido'){ 
      if(this.nomeValido === true && 
        this.dataValido === true && 
        this.horaValido === true && 
        this.minValido === true && 
        this.payValido === true && 
        this.tipoValido === true && 
        this.ruaValido === true && 
        this.bairroValido === true &&
        this.numValido === true){
        this.formEstado = '' 
        this.corBotao = 'btn-success'
      }else{ 
        this.formEstado = 'disabled'
        this.corBotao = 'btn-secondary'
       }
    }else{
    if(this.nomeValido === true && 
      this.dataValido === true && 
      this.horaValido === true && 
      this.minValido === true && 
      this.payValido === true && 
      this.tipoValido === true &&
      this.unidadeValido === true){
      this.formEstado = ''
      this.corBotao = 'btn-success'
    }else{ 
      this.formEstado = 'disabled'
      this.corBotao = 'btn-secondary'
       }
    } 

  }
  whatsap(){
    if(this.troco == ''){
      this.troco = 'Não'
    }
    for (var i = 0; i < 14; i++) {
      if(this.modelo[i].q != '00'){
      this.textowhatsap += encodeURIComponent(`${this.modelo[i].m}: ${this.modelo[i].q} \n` );
      }
        
    }
    this.textowhatsap += encodeURIComponent(`\n` );
    for (var i = 0; i < 4; i++) {
      if(this.refri[i].q != '0'){
      this.textowhatsap += encodeURIComponent(`${this.refri[i].refri}: ${this.refri[i].q} \n` );
      }
    }

    console.log('nome:',this.nome)
    if(this.tipo == 'Entregar pedido'){
      this.textowhatsap += encodeURIComponent(`\n*Nome:${this.nome}*\n*Data:* ${this.data}\n*Hora:* ${this.hora}:${this.min}\n*Pagamento:* ${this.pay}\n*${this.tipo}:*\n${this.rua} *Nº:* ${this.num}\n*Complemento:* ${this.complemento}\n*Bairro:* ${this.bairro}\nPagamento: ${this.pay}\n *Troco:* ${this.troco} \n ------------------------- \n Valor Total: ${this.valorTotal}.00`)
    }else{
      this.textowhatsap += encodeURIComponent(`\n${this.nome}\n*Data:* ${this.data}\n*Hora:* ${this.hora}:${this.min}\n*Pagamento:* ${this.pay}\n*${this.tipo}:*\n${this.unidade}\n ---------------------------- \n Valor Total: ${this.valorTotal}.00`)
    }

    let celular: number = 080000000;
    let texto: any = "Texto que eu vou enviar \n com quebras de \n texto.";
    window.location.href = "https://api.whatsapp.com/send?phone=" + celular + "&text=" + this.textowhatsap.substring(9), "_blank";
    //Ob"_system", no lugar de blank, caso você esteja usando Phonegap/Cordova/Ionic ou qualquer um baseado em webview;
  }


  cardapio(){
    window.location.href = "http://pastelpontocom.epizy.com" , "_blank";
      }

}
