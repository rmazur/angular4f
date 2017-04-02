import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal = '';

  spaceScreens: Array<any>;

  constructor(public af: AngularFire, private http: Http) {
    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

    this.http.get('../assets/data/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    });
  }

  Send(desc: string) {
    this.items.push( { message: desc});
    this.msgVal = '';
  }

likeMe(i) {
    if (this.spaceScreens[i].liked === 0) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}
