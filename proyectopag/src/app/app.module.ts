import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // libreria para hacer coneccion con express

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NarvarComponent } from './components/narvar/narvar.component';
import { HomeComponent } from './components/home/home.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RefrigeriosComponent } from './components/refrigerios/refrigerios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerdidoComponent } from './components/perdido/perdido.component';
import { TiendaComponent } from './components/tienda/tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    NarvarComponent,
    HomeComponent,
    PiePaginaComponent,
    RegistroComponent,
    EventosComponent,
    RefrigeriosComponent,
    DashboardComponent,
    PerdidoComponent,
    TiendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,   // se debe colocar aqui para importar la libreria que llama al express
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
