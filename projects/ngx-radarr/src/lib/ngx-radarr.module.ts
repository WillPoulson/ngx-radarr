import { NgModule, ModuleWithProviders } from '@angular/core';
import { Config } from './interfaces/config';
import { RadarrApiService } from './services/radarr-api.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgxRadarrModule {
  public static forRoot(config: Config): ModuleWithProviders {
    return {
        ngModule: NgxRadarrModule,
        providers: [
            RadarrApiService,
            {
                provide: 'config',
                useValue: config
            }
        ]
    };
  }
}
