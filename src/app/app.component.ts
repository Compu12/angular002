import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular002';


listaEstudiantes:any[]=[
  {
    nombre:'Xavier Cañizares',
    estado:'Aprobado'
  },
  {
    nombre:'John Doe',
    estado:'Aprobado'
  }
  ,
  {
    nombre:'Luis Doe',
    estado:'Suspenso'
  }
]

mostrar:boolean=true;
ejecutar():void{
this.mostrar=!this.mostrar;  
}



}
