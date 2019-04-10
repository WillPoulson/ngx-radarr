import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class NgxRadarrModule {
  public static forRoot(config: any): ModuleWithProviders {
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
