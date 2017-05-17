import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {SOME_TOKEN, STRING_TOKEN} from '../tokens';

const TOKEN_THAT_WORKS = new InjectionToken<string>('tokenThatWorks');

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [{provide: TOKEN_THAT_WORKS, useValue: 'Token that works'}]
})
export class SampleComponent implements OnInit {

  constructor(
    @Inject(SOME_TOKEN) private someToken: string,

    @Inject(TOKEN_THAT_WORKS) private tokenThatWorks: string,

    // if using STRING_TOKEN reference - everything fails
    @Inject(STRING_TOKEN) private stringToken: string
  )
  { }

  ngOnInit() {
    console.log(this.someToken);
    console.log(this.tokenThatWorks);
    console.log(this.stringToken);
  }

}
