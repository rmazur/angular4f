import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

private serverURL = 'http://13.69.79.111/api';
private headers: Headers = new Headers(
  {
    'Content-Type': 'application/hal+json'
  }
);

  constructor(private http: Http) {

  }

getUrl(url: string): string {

  return this.serverURL + url;
}

getOptions(options: RequestOptionsArgs): RequestOptionsArgs {

  const op = {headers: this.headers};

  if (options) {
  return Object.assign(op, options);
  }

  return op;
}

/**
 *
 * @param url
 * @param options
 */
  get(endpoint: string, options?: RequestOptionsArgs): Observable<Response> {

    const url = this.getUrl(endpoint);
    const op = this.getOptions(options);

    return this.http.get(url, {headers: this.headers});
  }
/**
 *
 * @param url
 * @param options
 */
  post(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response> {

  const url = this.getUrl(endpoint);
  const op = this.getOptions(options);

  return this.http.post(url, body, op);
  }

}
