import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { PerdidoComponent } from './components/perdido/perdido.component';
import { RefrigeriosComponent } from './components/refrigerios/refrigerios.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TiendaComponent } from './components/tienda/tienda.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'registro', component:RegistroComponent},
     { path: 'tienda', component:TiendaComponent},
  { path: 'eventos', component:EventosComponent},
  { path: 'refrigerio', component:RefrigeriosComponent},
  { path: 'database', component:DashboardComponent},
  { path: 'editar/:id', component:RegistroComponent},
  {path: '404', component: PerdidoComponent},   //ruta donde se direcciona cuando estamos perdidos
  { path: '**', redirectTo: '404', pathMatch:'full'}   // siempre debe estar al final, se usa para direccionar cuando el usuario escribe una ruta que no existe patchmach es el cubrimiento especifico de toda esta ruta, es decir que siempre en todo el proyecto cuando el usuario escriba una lista que no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
