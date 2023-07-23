import { Injectable } from '@angular/core';

import exampledata from '../../data/sample-music-data.json';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
//import { Track } from '../models/Track';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  private host = "http://localhost:3000"
  //private readonly artists: Artist[] = [];
  //albums: Album[] = exampledata;

  constructor(private http: HttpClient) {

  }
  // constructor() {
  //   this.createArtists();
  //   this.createAlbums();
  // }


  public getArtists(callback: (artists: Artist[]) => void): void {
    this.http.get<Artist[]>(this.host + "/artists").subscribe((artists: Artist[]) => {
      callback(artists);
    });
  }

  // public getAlbums(callback: (albums: Album[]) => void): void {
  //   this.http.get<Album[]>(this.host + "/albums").subscribe((albums: Album[]) => {
  //     callback(albums);
  //   });
  // }


  public getAlbums(artistName: string, callback:(albums: Album[]) => void): void {
    let request = this.host + `/albums/${artistName}`;
    console.log('request', request);
    this.http.get<Album[]>(request).subscribe((albums: Album[]) => {
      console.log('have albums', albums);
      callback(albums);
    });
  }

  public createAlbum(album: Album, callback: () => void): void {
    this.http.post<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  public updateAlbum(album: Album, callback: () => void): void {
    this.http.put<Album>(this.host + "/albums", album).subscribe((data) => {
      callback();
    });
  }

  public deleteAlbum(id: number, callback: () => void ): void {
    this.http.delete(this.host + "/albums/" + id).subscribe((data) => {
      callback();
    });
  }
}
  // private createAlbums(): void {
  //   exampledata.forEach((data: any) => {
  //     if (data.artist === 'The Beatles') {
  //       const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
  //       const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
  //       this.albums.push(album);
  //     }
  //   });
  // }

  // private createArtists(): void {
  //   this.artists.push(new Artist(0, 'The Beatles'));
  // }

  

  // public getArtists(): Artist[] {
  //   return this.artists;
  // }










