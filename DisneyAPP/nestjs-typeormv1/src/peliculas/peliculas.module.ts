import { Module } from '@nestjs/common';
import { PeliculasController } from './controllers/peliculas.controller';
import { PeliculasService } from './services/peliculas.service';
import { Pelicula } from './entities/pelicula.entity';
import { Categoria } from './entities/categoria.entity';
import { Favorito } from './entities/favorito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula, Categoria, Favorito])],
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule {}
