import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app'
import {Router } from '@angular/router'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  public isLoggedIn:boolean= false;
  private email:string;
  user: firebase. User;
  constructor(public afAuth: AngularFireAuth, private router:Router) {
    afAuth.authState.subscribe(user=>this.user=user)

  /*
    firebase.auth().onAuthStateChanged(function(user) {


    if (user) {


    } else {

    }
  });
  */
  }

  ngOnInit() {


  }

  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn=false;
    this.router.navigate(['/login'])
  }

}
