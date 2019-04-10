import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.scss']
})
export class InserirComponent implements OnInit {

  myForm: FormGroup;
  cpf:string;

  constructor(private fb: FormBuilder) { 
    //carrega o formulário
    this.myForm = this.fb.group({
      cpf: this.fb.control('', Validators.required)
    });
  }

  @ViewChild('cpf') cpfElement: ElementRef;

  onSubmit(f: NgForm) {
    //recebe valor do input do formulário
    var val = f.value.cpf;
    //faz o JSON parse dos itens do LocalStorage e inicia a variável 
    var vallist = JSON.parse(localStorage.getItem(AppComponent.KEY));
    vallist = val;
    //Insere o item com chave específica para cada no LocalStorage
    localStorage.setItem(AppComponent.KEY + AppComponent.i, vallist);
    //Incrementa variável global de identificalçao
    AppComponent.i = AppComponent.i + 1;

    alert("CPF cadastrado com sucesso!");
    
    this.cpfElement.nativeElement.focus()
  }

  ngOnInit() {
  }

}
