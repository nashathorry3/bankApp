import { Component, OnInit } from '@angular/core';
import { AngularFireList,AngularFireDatabase} from'@angular/fire/database'

import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-exam',
  templateUrl: './my-exam.component.html',
  styleUrls: ['./my-exam.component.css']
})
export class MyExamComponent implements OnInit {
  data={
    fname:'',
    lname:'',
    suject:'',
    result:''

  }

logger:any;

  itemArray=[];
  results$:Observable<any[]>
  itemList:AngularFireList<any>
  constructor(public db:AngularFireDatabase,public toaster:ToastrService ,private router:Router) {

    this.itemList=db.list('Subject');
    // to get firebase key
    this.itemList.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y=action.payload.toJSON()
        y['$key']=action.key
        this.itemArray.push(y as listitem)
      })

    })
    console.log(this.itemArray)

   }

  ngOnInit() {
  }
  adds(){
    this.itemList.push({

      FirstName:this.data.fname,
      LastName:this.data.lname,
      SUBJECT:this.data.suject,
     Result:this.data.result
    })
    this.toaster.info('new obj add')
    

    this.itemArray=[];
  }

 // showResult(){
  // this.results$=this.db.list('/Subject').snapshotChanges();

//  }

  delete($key){
    confirm('Are you sure You Wante to detele?'+ this.toaster.warning('Item Deleted'));

   // alert('Are you sure You Wante to detele?')
    this.itemList.remove($key)
    this.router.navigate(['/my-exam'])
    this.itemArray=[]

  }




info(){
console.log(this.itemArray)
}
editform($key){
  for(let value of this.itemArray){
    if(value['$key']==$key){
    console.log(value['$key'])

      this.data.fname=value['FirstName'];
      this.data. lname=value['LastName'];
      this.data. suject=value['SUBJECT'];
      this.data.  result=value['Result'];


    }

   }
  }
  editdata($key){
    this.data.fname
    this.data. lname
    this.data. suject
    this.data.  result

    console.log("$key :"+$key+"name :"+this.data.fname+this.data.lname+""+"   subject :"+this.data.suject+"Result :" +this.data.result)
    this.itemList.set($key,{

      FirstName:this.data.fname,
      LastName:this.data.lname,
      SUBJECT:this.data.suject,
     Result:this.data.result


    })


     }
}











export class listitem{

  $key:string;
  FirstNam:string;
  LastName:string;
  SUBJECT:string;
  Result:string;

}
