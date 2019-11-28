import { Injectable } from '@angular/core';
import * as firebase from  'firebase'
import { AngularFireList,AngularFireDatabase} from'@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email:string='';
password:string='';

  constructor( private fire:AngularFireAuth,private router:Router) { }
  login(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then (user=>{
      console.log(this.email,this.password);
      this.router.navigate(['main']);

    }).catch(err=>{
      alert('errr')

    })
  }
}
