import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'conductores',
    loadChildren: () => import('./conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'editclave',
    loadChildren: () => import('./editclave/editclave.module').then( m => m.EditclavePageModule)
  },  {
    path: 'comunas',
    loadChildren: () => import('./comunas/comunas/comunas.module').then( m => m.ComunasPageModule)
  },
  {
    path: 'agregar-comuna',
    loadChildren: () => import('./comunas/agregar-comuna/agregar-comuna.module').then( m => m.AgregarComunaPageModule)
  },
  {
    path: 'detalle-comuna',
    loadChildren: () => import('./comunas/detalle-comuna/detalle-comuna.module').then( m => m.DetalleComunaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

