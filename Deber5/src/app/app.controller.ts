import {Controller, Get, Req, Res} from '@nestjs/common';

const fs = require('fs');

@Controller()
export class AppController {
  @Get()
  root(@Req() request, @Res() response) {
    console.log('Inicio');
    let contenidoHtml = '';
    console.log('ContenidoHtml', contenidoHtml);
    fs.readFile(
      _dirname + '/html1/Index.html', 'utf8', (error, contenidoArchivo) => {
        console.log('Respondio');
        const nombre = 'Gabriela';
        if (error) {
          console.log('Error', error);
          console.log('contenidoHtml', contenidoHtml);
          console.log('Final');
          return response.send('Error');
        } else {
          contenidoHtml = contenidoArchivo;
          contenidoHtml = contenidoHtml.replace('{{nombre}}', nombre);
          console.log('contenidoHtml', contenidoHtml);
          console.log('contenidoHtml', contenidoHtml);
          console.log('Final');
          return response.send(contenidoHtml);
        }
      }
    );
  }
}
