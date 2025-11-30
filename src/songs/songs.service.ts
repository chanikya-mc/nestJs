import { Injectable } from '@nestjs/common';

export interface Song {
  title: string;
  artist: string[];
}

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(song: Song): Song[] {
    this.songs.push(song);
    return this.songs;
  }

  findAll(): Song[] {
    return this.songs;
  }
}
