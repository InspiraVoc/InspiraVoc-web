import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";

export const authRoutes: Routes = [{
    path: '',
    component: AuthLayoutComponent,
    children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
    ]
}]

