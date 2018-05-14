import {Controller, Get, Post, Req, Res} from "@nestjs/common";

const fs = require('fs');
let preguntasHtml = fs.readFileSync(dirname + '/html/preguntasFrecuentes.html', 'utf8');

@Controller()
export class PreguntasFrecuentes {

  preguntasfrecuentes = [];

  @Post('preguntasfreq')
  anadirPreguntas(@Req() request, @Res() response) {
    const parametrosConsulta = request.query;
    this.preguntasfrecuentes.push(new preguntasfrecuentesParametros(parametrosConsulta.preguntas1, parametrosConsulta.respuestas));
    console.log(request.preguntas1);
    preguntasHtml = preguntasHtml.concat('<h1> Pregunta </h1> ', request.preguntas1);
    preguntasHtml = preguntasHtml.concat('<p> Respuesta</p>', request.respuestas);

    return response.send(this.preguntasfrecuentes);
  }

  @Get('preguntas')
  mostrarPreguntas(@Res() response) {
    return response.status(200).send(preguntasHtml)
  }
}

class preguntasfrecuentesParametros {
  constructor(public preguntas1: string,
              public respuestas: string) {
  }
}
