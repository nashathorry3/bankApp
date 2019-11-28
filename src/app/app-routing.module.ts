
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MeComponent } from './me/me.component';
import { RegisterComponent } from './register/register.component';
import { MyExamComponent } from './my-exam/my-exam.component';



const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'main', component: MainComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent  },

  { path: 'my-exam', component: MyExamComponent   },
  { path: 'me', component: MeComponent  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

