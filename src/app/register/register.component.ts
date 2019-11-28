import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

import {Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private fire:AngularFireAuth ,private router:Router) { }

  ngOnInit() {
  }
  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then (user=>{
      console.log(this.email,this.password);
      this.router.navigate(['me']);

    }).catch(err=>{
      alert('errr')

    })
  }
}
