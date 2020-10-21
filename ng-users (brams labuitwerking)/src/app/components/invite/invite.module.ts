import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InviteComponent } from './invite.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InviteComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: InviteComponent }]),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class InviteModule { }
