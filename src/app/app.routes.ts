import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'app',
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
                loadComponent: () => import('./pages/testvocacionales/testvocacionales.component').then((m) => m.TestvocacionalesComponent) 
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
