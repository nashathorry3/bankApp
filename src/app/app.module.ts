import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule} from'@angular/fire/database'

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MeComponent } from './me/me.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RegisterComponent } from './register/register.component';
import { MyExamComponent } from './my-exam/my-exam.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MeComponent,
    RegisterComponent,
    MyExamComponent,
  


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,





  ],
  providers: [ NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
