import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ApiConfiguration } from './api/api-configuration';
import { environment } from '../environments/environment';
import { PagesModule } from './pages/pages.module';

export function initApiConfiguration(config: ApiConfiguration): Function {
  return () => config.rootUrl = environment.surveyCanaryApi;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
    BrowserAnimationsModule
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
