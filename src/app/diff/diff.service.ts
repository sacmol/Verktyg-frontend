import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DiffService{

    private _apiUrl: string = 'http://localhost:9080/webapp/q00ds03i/rs/spring/api/test';

    constructor(private _http: Http){   
    }

    errorHandler(error: any): any{

        console.log(error);
    }

    getCurrentTime(){

        return this._http.get('http://date.jsontest.com')
        .map(res => res.json())
        .catch(this.errorHandler);

    }
     private extractData(res: Response) {
         let body = res.json();
         return body.data || { };
  }
    getTest(){
        return this._http.get(this._apiUrl)
        .map(res  => res.json())
        .catch(this.errorHandler);
    }
}









