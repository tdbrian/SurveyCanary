import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ApiConfiguration } from './api/api-configuration';
import { environment } from '../environments/environment';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => config.rootUrl = environment.surveyCanaryApi;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApiConfiguration,
    deps: [ApiConfiguration],
    multi: true
  },
    ApiConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
