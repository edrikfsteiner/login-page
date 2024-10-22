import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { UserComponent } from './components/pages/user/user.component';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuard]
    }
];
