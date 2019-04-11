import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as _ from 'lodash';
import { Disk } from '../interfaces/disk';
import { Config } from '../interfaces/config';
import { Movie } from '../interfaces/movie';
import { NewMovie } from '../interfaces/new-movie';

@Injectable({
  providedIn: 'root'
})
export class RadarrApiService {

  constructor(
    private http: HttpClient,
    @Inject('config') private config: Config
  ) { }

  public getDiskSpace(): Promise<Array<Disk>> {
    return new Promise((resolve, reject) => {
      this.http.get(this.config.url + '/diskspace', {params: this.getAuthParams()}).toPromise().then((disks: Array<Disk>) => {
        for (const disk of disks) {
          disk.usedSpace = disk.totalSpace - disk.freeSpace;
        }
        return resolve(disks);
      }).catch((error) => {
        return reject(error);
      });
    });
  }

  public getMoviesInLibrary(downloadedOnly?: boolean): Promise<Array<Movie>> {
    return new Promise((resolve, reject) => {
      this.http.get(this.config.url + '/movie', {params : this.getAuthParams()}).toPromise().then((movies: Array<Movie>) => {
        if (downloadedOnly) {
          movies = movies.filter((x) => {
            return x.downloaded === true;
          });
        }
        return resolve(movies);
      }).catch((error) => {
        return reject(error);
      });
    });
  }

  public getMovieInLibraryWithID(id: number): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.http.get(this.config.url + '/movie/' + id.toString(), {params : this.getAuthParams()}).toPromise().then((movie: Movie) => {
        return resolve(movie);
      }).catch((error) => {
        return reject(error);
      });
    });
  }

  public addMovieToLibrary(newMovie: NewMovie): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.http.post(this.config.url + '/movie', newMovie, {params: this.getAuthParams()}).toPromise().then((movie: Movie) => {
        return resolve(movie);
      }).catch((error) => {
        return reject(error);
      });
    });
  }

  public getMovieLookup(term: string) : Promise<Array<Movie>> {
    return new Promise((resolve, reject) => {
      const params = this.getAuthParams();
      params.append('term', term);
      this.http.get(this.config.url + '/movie/lookup', {params: params}).toPromise().then((movies: Array<Movie>) => {
        return resolve(movies);
      }).catch((error) => {
        return reject(error);
      });
    });
  }

  private getAuthParams(): HttpParams {
    const params = new HttpParams();
    params.append('apikey', this.config.key);
    return _.cloneDeep(params);
  }
}
