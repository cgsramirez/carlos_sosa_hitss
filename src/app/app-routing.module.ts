import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListModulesComponent } from './list-modules/list-modules.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component:UserDetailsComponent},
  {path: 'listmodules', component:ListModulesComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
