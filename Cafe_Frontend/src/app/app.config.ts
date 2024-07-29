import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbLayoutModule, NbOverlayModule, NbThemeModule, NbToastrModule} from '@nebular/theme';
import {ToastrModule} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, { useHash: true }),
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({  preventDuplicates: true}),
    ),
    provideRouter(routes),
    provideClientHydration()
  ]
};
