export interface MovieImage {
    coverType: string;
    url: string;
}

export interface MovieRatings {
    votes: number;
    value: number;
}

export interface Movie {
    title: string;
    sortTitle: string;
    sizeOnDisk: number;
    status: string;
    overview: string;
    inCinemas: Date;
    images: Array<MovieRatings>;
    website: string;
    downloaded: boolean;
    year: number;
    hasFile: boolean;
    youTubeTrailerId?: string;
    studio?: string;
    path?: string;
    profileId: number;
    monitored: boolean;
    minimumAvailability?: string;
    runtime?: number;
    lastInfoSync?: Date;
    cleanTitle: string;
    imdbId?: string;
    tmdbId?: number;
    titleSlug: string;
    genres: Array<string>;
    tags: Array<any>;
    added: Date;
    ratings: MovieRatings;
    alternativeTitles: Array<string>;
    qualityProfileId: number;
    id: number;
}