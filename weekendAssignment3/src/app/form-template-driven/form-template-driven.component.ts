import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    onSubmit (logIn:any): void{
      alert('Congratulations! You have successfully registered for 7 days free trial.');
      console.log(logIn);
     }
}

