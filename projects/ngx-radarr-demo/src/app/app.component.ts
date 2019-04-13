import { Component, OnInit } from '@angular/core';
import { RadarrApiService, Movie } from 'ngx-radarr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // private moviesInLibrary: Array<Movie> = [];

  constructor(private radarr: RadarrApiService) {}

  ngOnInit() {
    // this.radarr.getMoviesInLibrary(true).then((movies) => {
    //   const list = []
    //   movies.sort((a, b) => {
    //     return b.sizeOnDisk - a.sizeOnDisk;
    //   });

    //   for (const movie of movies) {
    //     list.push(movie.title + ' ' + (movie.sizeOnDisk / 1073741824).toFixed(3) + ' GB');
    //   }

    //   console.log(list);
    // }).catch((error) => {
    //   console.log('Uh oh there was an error');
    // });

    this.radarr.getMovieLookup('The Snowman').then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}
