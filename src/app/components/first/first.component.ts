import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  nome:string = "Pedro"
  idade:number = 40
  trabalho:string = "Dev"
  hobbies = ["Fut", "Games"]
  carro = {marca:"Ford", modelo: "Ford Gt"}

}
