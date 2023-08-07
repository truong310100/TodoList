import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'todolist', component: TodoListComponent },
  { path:'login', component: LoginComponent },
  { path:'logout', component: LogoutComponent },
  { path:'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
