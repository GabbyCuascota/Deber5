import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements NestModule{
  nombreAplicacion = 'Deber5 NetsJS';
  configure(consumer: MiddlewareConsumer): void{
    consumer.apply(LogMiddleware)
      .with(this.nombreAplicacion)
      .forRoutes(
        usuarioController,
        appController,
        parametrosController,
        inicioController,
        preguntasFrecuentesController
      )
  }
}
