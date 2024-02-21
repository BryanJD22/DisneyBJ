import { Module } from '@nestjs/common';
import { PeliculasController } from './controllers/peliculas.controller';
import { PeliculasService } from './services/peliculas.service';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule {}
