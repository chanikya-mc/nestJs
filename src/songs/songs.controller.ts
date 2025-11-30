import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get()
  findOne() {
    return 'find one song by id';
  }

  @Put(':id')
  update() {
    return 'updating songs by id';
  }

  @Delete(':id')
  delete() {
    return 'deleting songs by id';
  }
}
