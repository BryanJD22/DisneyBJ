import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pelicula } from '../entities/pelicula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeliculasService {
    //Cómo inserto mi repository para que me gestione las transacciones
    // con base de datos de forma automática==> TYPEORM
    constructor(
        @InjectRepository(Pelicula)
        private peliculasRepository: Repository<Pelicula>,
      ) {}
    
      //listar todas las peliculas 

      async findAll(): Promise<Pelicula[]> {
        console.log('Llegando A LISTAR TODOS');
        return this.peliculasRepository.find(); // Utiliza el método find() sin argumentos para obtener todas las entidades
        
      }

      // Nuevo método para filtrar películas por categoría
      async findByCategoria(categoriaId: number): Promise<Pelicula[]> {
        return this.peliculasRepository
          .createQueryBuilder('pelicula')
          .innerJoinAndSelect('pelicula.categorias', 'categoria')
          .where('categoria.id = :categoriaId', { categoriaId })
          .getMany();
      }
    

      //listar por categorias

}
