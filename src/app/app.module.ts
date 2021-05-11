import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Task1cardComponent } from './task1card/task1card.component';
import { MaterialModule } from './material/material.module';
import { Task3validatorPipe } from './task3validator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Task1cardComponent,
    Task3validatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
