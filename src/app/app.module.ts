import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirComponent } from './inserir/inserir.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RemoverComponent } from './remover/remover.component';

@NgModule({
  declarations: [
    AppComponent,
    InserirComponent,
    ConsultarComponent,
    RemoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

