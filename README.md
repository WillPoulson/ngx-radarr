# Ngx-Radarr

A simple angular package to interact with the Radarr API.

Features include but may not be limited to:
- Getting all movies in your Radarr library.
- Getting all downloaded movies in your Radarr library.
- Adding new movie to your Radarr library.
- Searching for movies on TMDB/IMDB via Radarr.
- Getting Disks (Free space and used space) via Radarr.
- Useful interfaces to keep your code clean and structured.

## Installation
`npm i ngx-radarr`

## Useage

1) Import `NgxRadarrModule` and `Config` into your app module.
```typescript
import { NgxRadarrModule, Config } from 'ngx-radarr';
```

2) Create a config in your app module.
```typescript
const ngxRadarrConfig: Config = {
    url: 'YOUR RADARR API URL HERE', // Eg. https://123/api
    key: 'YOUR RADARR API KEY HERE'
};
```

3) Add the module to your app module imports list parsing in the config.
```typescript
@NgModule({
...
    imports: [
        NgxRadarrModule.forRoot(ngxRadarrConfig)
    ]
...
})
```


4) Now you can import the service `(RadarrApiService)` where you need it and start using it.

```typescript
import { RadarrApiService } from 'ngx-radarr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private radarr: RadarrApiService) {}

    public getMovies() {
        this.radarr.getMoviesInLibrary().then((movies) => {
            console.log(movies);
        });
    }
}
```