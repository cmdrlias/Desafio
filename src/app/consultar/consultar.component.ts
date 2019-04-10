import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import * as $ from 'jquery';
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {
  
  data:string;
  dataList = [];
  myForm: FormGroup;
  value:string;

  constructor(private fb: FormBuilder) { 
    //carrega formulário
    this.myForm = this.fb.group({
      cpf: this.fb.control('', Validators.required)
    });
  }

  @ViewChild('cpf') cpfElement: ElementRef;

  onSubmit(f: NgForm) {
    //recebe valor do input do formulário
    this.value = f.value.cpf;
    //variável booleana que verifica se existem registros ou não
    var found = false;
    //itera valores do LocalStorage e, caso exista, exibe valor pesquisado através do input
    for(var i = 0; i < localStorage.length; i++) {
      if(localStorage.getItem(AppComponent.KEY + i) == this.value) {
        this.data = localStorage.getItem(AppComponent.KEY + i);
        found = true;
      }
    }
    //caso o registro pesquisado não exista, é exibido uma mensagem
    if(!found) {
      this.data = "Nenhum registro encontrado.";
    }
    this.cpfElement.nativeElement.focus() 
  }

  ngOnInit() {}

  findAll() {
    //variável values recebe todos os valores das chaves inseridas no LocalStorage
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    //variável booleana que verifica se existem registros ou não
    var found = false;
    //itera-se as chaves para exibição dos seus valores
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    //verifica se o array possui valores ou não
    if(values.length < 1) {
      found = false;
    } else {
      found = true;
    }
    //caso não existam registros no LocalStorage, é exibido uma mensagem
    if(!found) {
      values.push("Nenhum registro encontrado.");
    }

    this.dataList = values;

  }
}
