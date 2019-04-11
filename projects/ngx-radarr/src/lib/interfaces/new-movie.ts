import { MovieImage } from './movie';

export interface NewMovie {
    title: string;
    qualityProfileId: number;
    titleSlug: string;
    images: Array<MovieImage>;
    tmdbId: number;
    year: number;
    path: string;
    monitored?: boolean;
    addOptions?: NewMovieAddOptions; 
}


export interface NewMovieAddOptions {
    searchForMovie: boolean;
}