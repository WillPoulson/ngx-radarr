# Ngx-Radarr

A simple angular package to interact with the Radarr API.

## Installation

To install this package you must first import it into your `app.module.ts` providing it with a config.

    import { NgxRadarrModule, Config } from 'ngx-radarr';

    const ngxRadarrConfig: Config = {
        url: 'YOUR RADARR API URL HERE', // Eg. https://123/api
        key: 'YOUR RADARR API KEY HERE'
    };

    @NgModule({
    ...
    imports: [
        NgxRadarrModule.forRoot(ngxRadarrConfig)
    ])

Next you can import the service where you need it and start using it.

    import { RadarrApiService } from 'ngx-radarr';
    ...
    constructor(private radarr: RadarrApiService) {}
    ...
    public getMovies() {
        this.radarr.getMoviesInLibrary().then((movies) => {
            console.log(movies);
        });
    }

## Features

Features include but may not be limited to:
- Getting all movies in your Radarr library.
- Getting all downloaded movies in your Radarr library.
- Adding new movie to your Radarr library.
- Searching for movies on TMDB/IMDB via Radarr.
- Getting Disks (Free space and used space) via Radarr.
- Useful interfaces to keep your code clean and structured.