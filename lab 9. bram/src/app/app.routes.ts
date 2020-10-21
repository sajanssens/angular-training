import { Route } from '@angular/router';
import { HomePage } from './home.page';
import { InvitePage } from './invite.page';

export const routes: Route[] = [
	{ path: 'home', component: HomePage },
	{ path: 'invite', component: InvitePage },
];