import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from './entities/notes.entity';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteRepository: Repository<NoteEntity>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async create(dto: CreateNoteDto): Promise<NoteEntity> {
    const { title, priority } = dto;

    const note = this.noteRepository.create({ title, priority });

    return await this.noteRepository.save(note);
  }

  async findAll(): Promise<NoteEntity[]> {
    return this.noteRepository.find();
  }

  async findById(id: string): Promise<NoteEntity> {
    const movie = await this.noteRepository.findOne({
      where: {
        id,
      },
    });

    if (!movie) throw new NotFoundException(`Фильм с id ${id} Не найден`);

    return movie;
  }

  async delete(id: string) {
    const movie = await this.findById(id);

    await this.noteRepository.remove(movie);

    return movie.id;
  }
}
