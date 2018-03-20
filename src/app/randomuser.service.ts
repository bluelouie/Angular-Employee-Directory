import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RandomuserService {

  constructor(http: Http) {
      http.get('https://randomuser.me/api/?nat=us')
      .subscribe(response => {
        console.log(response);
        
      });
   }

}
