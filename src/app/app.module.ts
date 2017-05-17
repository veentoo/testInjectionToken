import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SampleComponent} from './sample/sample.component';

export const SOME_TOKEN = new InjectionToken<string>('someToken');
export const STRING_TOKEN = 'stringToken';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: SOME_TOKEN, useValue: 'Some Value'},
    {provide: STRING_TOKEN, useValue: 'String token value'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
