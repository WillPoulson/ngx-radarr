import { NgModule, ModuleWithProviders } from '@angular/core';
import { Config } from './interfaces/config';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxRadarrModule {
  public static forRoot(config: Config): ModuleWithProviders {
    return {
        ngModule: NgxRadarrModule,
        providers: [
            {
                provide: 'config',
                useValue: config
            }
        ]
    };
  }
}
