import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { authGuard } from './core/guard/auth.guard';
import { VerificationComponent } from './pages/auth/verification/verification.component';


export const routes: Routes = [
    
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {path: 'verification', component: VerificationComponent}
        ]
    },
    {
        path: 'app',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        canActivate: [authGuard],
        children: [
            {
                path: 'inicio',
                loadComponent: () => import('./pages/inicio/inicio.component')
            },
            {
                path: 'mentores',
                loadComponent: () => import('./pages/mentores/mentores.component').then((m) => m.MentoresComponent),
            },
            {
                path:'testvocacionales',
                loadComponent: () => import('./pages/testvocacionales/testvocacionales.component').then((m) => m.TestVocacionalesComponent) 
            },
            {
                path: 'pago',
                loadComponent: () => import('./pages/pago/pago.component').then(m => m.PagoComponent)
            },
            {
                path: 'soporte',
                loadComponent: () => import('./pages/soporte/soporte.component')
            },
            {
                path:'cuenta',
                loadComponent: ()=>import('./pages/cuenta/cuenta.component').then((m) => m.CuentaComponent)
            },
            {
                path: 'reuniones',
                loadComponent: () => import('./pages/reuniones/reuniones.component').then((m) => m.ReunionesComponent),
            },
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
