import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormdesignComponent } from './formdesign/formdesign.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateDrivenComponent, FormdesignComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
