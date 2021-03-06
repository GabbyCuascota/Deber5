import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";

@Middleware()
export class middleware implements NestMiddleware {

  resolve(nombreAplicacion: string, anio: number): ExpressMiddleware {
    return (request, response, next) => {
      const respuesta = {
        baseUrl: request.baseUrl,
        hostname: request.hostname,
        subdomains: request.subdomains,
        ip: request.ip,
        method: request.method,
        originalUrl: request.originalUrl,
        path: request.path,
        protocol: request.protocol,
        headers: request.headers,
      };
      console.log('***MIDDLEWARE***', nombreAplicacion, anio);
      console.log(respuesta);
      next();
    };
  }
}

