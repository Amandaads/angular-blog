import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  //temos nossas proprias propriedade e dinamicamente
  // propriedade inputavel, deixando ela vazia, chamaremos ela pelo componente, pela pag podemos declara-la como tag html normal <app-big-card photoCover> mudando dinamicamente, mudando o valor pelo parametro
  // pensando que podemos replicar e reutilizar, colocaremos como se fosse tag e preencher com input, de modo desejado
  // tiramos do html e colocamos na parte logica ts
  @Input()
  photoCover:string=""
  // photoCover:string="https://images.unsplash.com/photo-1664930720183-f2c6e2f92d00?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // cardTitle:string="NOVO SABOR DE PRINGLES NA AREA"
  @Input()
  cardTitle:string=""
  // cardDescription:string="Pringles endoidou e lançou 15 sabores novos, abalando nas redes e no coração de admiradores da marca "
  @Input()
  cardDescription:string=""
  @Input()
  Id:string="0"
  constructor(){}
  ngOnInit(): void {
  }
  

}
