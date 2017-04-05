import { Component } from '@angular/core';

import {ViewEncapsulation} from '@angular/core';

import { DiffService } from './diff/diff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.fdr.css'],
  providers: [DiffService]
})
export class AppComponent {
  title = 'Angular2 app';
  namnet : string;
  getData: string;

  constructor(private _diffService: DiffService){}

byt()
{
  this.title = "Q00ds03 verktyg";
}

reset(){
  this.title = 'Angular2 app';
}
  hamta(){
     this._diffService.getTest()
     .subscribe(data => this.namnet = JSON.stringify(data),
     error => alert(error),
     () => console.log("Klar")
      );
  }

  onTestGet(){

    this._diffService.getCurrentTime()
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Klar")
     
     );
  }
}
