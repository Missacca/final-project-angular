export class Song {
  id: number;
  title: string;
  artist: string;

  constructor(id: number, title: string, artist: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
  }
}
