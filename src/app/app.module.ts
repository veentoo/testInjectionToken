import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SampleComponent} from './sample/sample.component';
import {SOME_TOKEN, STRING_TOKEN} from './tokens';

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
    {provide: STRING_TOKEN, useValue: 'String token value 2'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
