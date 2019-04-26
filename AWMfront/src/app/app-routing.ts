import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {TodoGroupComponent} from './todo-group/todo-group.component';
import {TachesComponent} from './taches/taches.component';
import {LogoutComponent} from './logout/logout.component';
import {UpdateComponent} from './update/update.component';


const routes: Routes = [
  {path : 'Sign-up', component : SignUpComponent},
  {path : 'Login', component : LoginComponent},
  {path : 'TodoGroup/:id', component : TodoGroupComponent},
  {path : 'Deconnexion', component : LogoutComponent},
  {path: 'tache/:id' , component: TachesComponent},
  {path: 'update/:id' , component: UpdateComponent}

  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]


})

export class AppRouting {

}
