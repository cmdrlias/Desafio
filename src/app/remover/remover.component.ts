import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.scss']
})
export class RemoverComponent implements OnInit {
  
  form2: FormGroup;
  cpf:string;
  data = [];
  keys;

  constructor(private fb: FormBuilder) { 
    //carrega o formulário
    this.form2 = this.fb.group({
      selectCPF: this.fb.control('', Validators.required)
    });
  }

  ngOnInit() {
    //variável values recebe todos os valores das chaves inseridas no LocalStorage
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    //Itera-se as chaves para exibição dos seus valores
    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]));
    }
    //Armazena os valores resultantes da iteração
    this.keys = Object.keys(localStorage);
    this.data = values;
  }
  //Função
  //executa o submit do formulário de remoção
  onSubmit(f: NgForm) {
    var val = f.value.selectCPF;
    /*Itera sobre os valores inseridos no LocalStorage e compara com o valor recebido
      pelo input da página*/
    for(var i = 0; i < localStorage.length; i++) {
      //Se o valor existe, é feita a remoção
      if(localStorage.getItem(AppComponent.KEY + i) == val) {
        localStorage.removeItem(AppComponent.KEY + i);
      }
    }
    alert("CPF removido com sucesso!");
  }
  //Função
  //Remove todos os itens inseridos no LocalStorage
  ClearStorageItems() {
    localStorage.clear();
    alert("Todos os registros de CPF foram removidos!");
  }
}
