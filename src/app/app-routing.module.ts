import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';

const routes: Route[] = [  
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  // { path: 'invite', component: InviteComponent } // eager 
  { path: 'invite', loadChildren: () => import('./components/invite/invite.module').then(m => m.InviteModule) }  // lazy
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
