import { Component, OnInit } from '@angular/core';
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
    this.myForm = this.fb.group({
      cpf: this.fb.control('', Validators.required)
    });
  }

  onSubmit(f: NgForm) {
    this.value = f.value.cpf;
    
    var found = false;
    
    for(var i = 0; i < localStorage.length; i++) {
      if(localStorage.getItem(AppComponent.KEY + i) == this.value) {
        this.data = localStorage.getItem(AppComponent.KEY + i);
        found = true;
      }
    }

    if(!found) {
      alert("CPF não encontrado!");
    }
      
  }

  ngOnInit() {
    $('#listItem').hover(function() {
      $('#listItem').addClass('active');
    }, function() {
      $('#listItem').removeClass('active');
    });
  }

  findAll() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    this.dataList = values;

  }
}
