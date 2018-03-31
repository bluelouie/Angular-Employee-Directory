import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RandomusersComponent } from './randomusers/randomusers.component';
import { ModalviewComponent } from './randomusers//modalview/modalview.component';


@NgModule({
  declarations: [
    AppComponent,
    RandomusersComponent,
    ModalviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
