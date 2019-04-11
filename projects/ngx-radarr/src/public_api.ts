/*
 * Public API Surface of ngx-radarr
 */

export { NgxRadarrModule } from './lib/ngx-radarr.module';
export { RadarrApiService } from './lib/services/radarr-api.service';
export { Disk } from './lib/interfaces/disk';
export { Movie, MovieRatings, MovieImage } from './lib/interfaces/movie';
export { Config } from './lib/interfaces/config';
export { NewMovie, NewMovieAddOptions } from './lib/interfaces/new-movie';