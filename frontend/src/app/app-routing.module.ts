import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { RoleComponent } from './role/role.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { VideoComponent } from './video/video.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
{path:'users', component:UsersComponent},
{path:'',redirectTo:'login', pathMatch:'full'},
{path:'login', component:LoginComponent},
{path:'video/:id', component:VideoComponent},
{path:'register', component:RegisterComponent},
{path:'user',component:UserhomeComponent},
{path:'reset/:token',component:ResetComponent},
{path:'forgot',component:ForgotComponent},
{ path: 'edit-user/:id', component: EditComponent },
{path:'admin',component:AdminComponent},
{path:'role/:id',component:RoleComponent},   
{ path: 'add-user', component: CreateUserComponent },
{ path: 'users-list', component: UsersListComponent },
{ path: 'admin-list', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
