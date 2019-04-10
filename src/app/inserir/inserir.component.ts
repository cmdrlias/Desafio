import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  myForm: FormGroup;
  cpf:string;

  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      cpf: this.fb.control('', Validators.required)
    });
  }

  onSubmit(f: NgForm) {

    var val = f.value.cpf;
    var vallist = JSON.parse(localStorage.getItem(AppComponent.KEY));
    
    vallist = val;
    
    localStorage.setItem(AppComponent.KEY + AppComponent.i, vallist);

    AppComponent.i = AppComponent.i + 1;

    alert("CPF cadastrado com sucesso!");
  }

  ngOnInit() {
  }

}
