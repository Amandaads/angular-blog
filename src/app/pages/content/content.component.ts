import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string="https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  contentTitle:string="ESSA EH A NOTICIA"
  contentDescription:string="Essa é a descricao da noticia, foto de batata pringles"
  constructor(){}
  ngOnInit(): void {
      
  }

}
