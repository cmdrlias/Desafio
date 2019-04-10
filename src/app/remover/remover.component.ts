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
    this.form2 = this.fb.group({
      selectCPF: this.fb.control('', Validators.required)
    });
  }

  ngOnInit() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(localStorage.getItem(keys[i]));
    }

    this.keys = Object.keys(localStorage);
    this.data = values;
  }

  onSubmit(f: NgForm) {
    var val = f.value.selectCPF;

    for(var i = 0; i < localStorage.length; i++) {
      if(localStorage.getItem(AppComponent.KEY + i) == val) {
        localStorage.removeItem(AppComponent.KEY + i);
      }
    }
    alert("CPF removido com sucesso!");
  }

  removeStorageItem(key:number) {

  }

}
