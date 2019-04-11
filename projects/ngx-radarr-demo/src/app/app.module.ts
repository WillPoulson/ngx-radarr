import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRadarrModule, Config } from 'ngx-radarr';

const ngxRadarrConfig: Config = {
  url: 'HIDDEN',
  key: 'HIDDEN'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRadarrModule.forRoot(ngxRadarrConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
