import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './Components/app';
import { Index } from './Components/index/index';
import { Insertar } from './Components/insertar/insertar';
import { Visualizar } from './Components/visualizar/visualizar';
import { VideojuegoService } from './Services/videojuego-service';

@NgModule({
  declarations: [
    App,
    Index,
    Insertar,
    Visualizar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    VideojuegoService
  ],
  bootstrap: [App]
})
export class AppModule { }
