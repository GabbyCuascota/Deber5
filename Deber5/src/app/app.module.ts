import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@Module({
  imports: [],
  controllers: [
    appController,
    usuario,
    parametrosController,
    inicioController,
    preguntasFrecuentes
  ], components: [],
})
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
export class AppModule implements NestModule {
  nombreAplicacion = 'Deber5 NetsJS';

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(middleware)
      .with(this.nombreAplicacion)
      .forRoutes(
        usuario,
        appController,
        parametrosController,
        inicioController,
        preguntasFrecuentes
      )
  }
}
