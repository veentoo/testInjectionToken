import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {SOME_TOKEN, STRING_TOKEN} from '../app.module';

const TOKEN_THAT_WORKS = new InjectionToken<string>('tokenThatWorks');

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [{provide: TOKEN_THAT_WORKS, useValue: 'Token that works'}]
})
export class SampleComponent implements OnInit {

  constructor(
    // @Inject(SOME_TOKEN) private token1: string,

    @Inject(TOKEN_THAT_WORKS) private token: string,

    // if using STRING_TOKEN reference - everything fails
    @Inject('stringToken') private stringToken: string
  )
  { }

  ngOnInit() {
    console.log(this.token);
    console.log(this.stringToken);
  }

}
