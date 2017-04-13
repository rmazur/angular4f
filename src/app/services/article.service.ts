import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ArticleService {

  constructor(private appService: AppService) { }

  getPosts(): Observable<any> {

    return this.appService.get('/test1').map(res => res.json()).catch(err => Observable.throw(err));
  }

}
