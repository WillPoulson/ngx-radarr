import { Component, OnInit } from '@angular/core';
import { RadarrApiService, Movie } from 'ngx-radarr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private moviesInLibrary: Array<Movie> = [];

  constructor(private radarr: RadarrApiService) {}

  ngOnInit() {
    this.radarr.getMoviesInLibrary().then((movies) => {
      this.moviesInLibrary = movies;
      console.log(this.moviesInLibrary);
    }).catch((error) => {
      console.log('Uh oh there was an error');
    });
  }
}
