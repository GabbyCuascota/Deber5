import {Controller, Get, HttpCode, Post, Req, Res} from "@nestjs/common";
import Status = jest.Status;

@Controller('Usuario')
export class Usuario {
  usuario = {
    nombre: 'Gabriela',
    apellido: 'Cuascota',
    edad: 26
  };

  usuarios = [];

  @HttpCode(202)
  @Get('mostrar1')
  mostrarUsuario1() {
    return this.usuario;
  }

  @Get('mostrar2')
  mostrarUsuario2(
    @Req() request,
    @Res() response
  ) {
    return response
      .status(200)
      .send(this.usuarios);
  }

  @Post('crearUsuario')
  crearUsuario(
    @Req() request,
    @Res() response
  ) {
    const nuevoUsuario = {
      nombre: request.query.nombre,
      apellido: request.query.apellido,
      edad: request.query.edad
    };

    this.usuarios.push(nuevoUsuario);

    return response
      .status(201)
      .send(nuevoUsuario);
  }


}
