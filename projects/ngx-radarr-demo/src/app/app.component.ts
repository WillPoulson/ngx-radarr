import { Component, OnInit } from '@angular/core';
import { RadarrApiService, Movie, Disk } from 'ngx-radarr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public shitMovies: Array<Movie> = [];

  constructor(private radarr: RadarrApiService) {}

  ngOnInit() {

  }

  public getShitMovies() {
    this.radarr.getMoviesInLibrary(true).then((movies) => {
      movies.sort((a, b) => {
        return a.ratings.value - b.ratings.value;
      });


      const shitMovies = movies.filter((x) => {
        return x.ratings.value < 5;
      });

      if (shitMovies.length === 0) {
        alert('There are no shit movies in your library');
      }

      this.shitMovies = shitMovies;
    }).catch((error) => {
      console.log('Uh oh there was an error');
    });
  }

  public getSpaceUsedByShitMovies() {
    return (this.shitMovies.reduce((prev, curr) => {
      return prev += curr.sizeOnDisk;
    }, 0) / 1073741824).toFixed(3) + ' GB';
  }

  public async deleteShitMovies() {
    try {
      for (const shitMovie of this.shitMovies) {
        await this.radarr.deleteMovieFromLibrary(shitMovie.id);
      }
      alert('Done!');
    } catch (error) {
      alert('THERE WAS AN ERROR');
    }
  }

  private logVisualList(movies) {
    const lisualList = [];
    for (const movie of movies) {
      lisualList.push(movie.title + ' ' + movie.ratings.value);
    }
    console.log(lisualList);
  }
}
