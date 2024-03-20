import { Test, TestingModule } from '@nestjs/testing';
import { PeliculasService } from './peliculas.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Pelicula } from '../entities/pelicula.entity';
import { Repository } from 'typeorm';
import { createConnection, getConnection, Connection } from 'typeorm';

describe('PeliculasService', () => {
  let service: PeliculasService;
  let repository: Repository<Pelicula>;
  let connection: Connection;

  beforeAll(async () => {
    connection = await createConnection({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true, // Esto es peligroso en producción, pero útil para pruebas
      entities: [Pelicula], // Asegúrate de especificar tus entidades aquí
    });
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PeliculasService,
        {
          provide: getRepositoryToken(Pelicula),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PeliculasService>(PeliculasService);
    repository = module.get<Repository<Pelicula>>(getRepositoryToken(Pelicula));
  });


  describe('findAll', () => {
    it('should return an array of movies', async () => {
      const movieData: Partial<Pelicula>[] = [{ titulo: 'Movie 1' }, { titulo: 'Movie 2' }];
      await connection.manager.save(Pelicula, movieData);

      const result = await service.findAll();

      expect(result.length).toBe(2);
      expect(result[0].titulo).toBe('Movie 1');
      expect(result[1].titulo).toBe('Movie 2');
    });

    it('should call repository.find', async () => {
      const findSpy = jest.spyOn(repository, 'find').mockResolvedValueOnce([]);

      await service.findAll();

      expect(findSpy).toHaveBeenCalled();
    });
  });
});
