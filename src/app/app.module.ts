import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { RandomuserService } from './randomuser.service';
import { RandomusersComponent } from './randomusers/randomusers.component';
import { ModalviewComponent } from './randomusers//modalview/modalview.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe,
    RandomusersComponent,
    ModalviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RandomuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
