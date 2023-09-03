import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BbService {
  private backend_url: String = 'http://localhost:8000';
  public placeholder_img_url: String = this.backend_url + '/static/main/empty.png';

  constructor(private http: HttpClient) { }

  getBbs(): Observable<Object[]> {
    return this.http.get<Object[]>(this.backend_url + '/api/bbs/');
  }

  getBb(pk: Number): Observable<Object> {
    return this.http.get<Object>(this.backend_url + '/api/bbs/' + pk);
  }

  handleError() {
    return (error: any): Observable<Object> => {
      window.alert(error.message);
      return of({});
    }
  }

  addComment(bb: String, author: String, password: String,
    content: String): Observable<Object> {
      const comment = {'bb': bb, 'author': author, 'content': content};
      const options = {headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + window.btoa(author + ':' + password),
        }
      )
      };

      return this.http.post<Object>(this.backend_url + '/api/bbs/' + bb +
        '/comments/', comment, options).pipe(catchError(this.handleError()));
    }

  getComments(pk: Number): Observable<Object[]> {
    return this.http.get<Object[]>(this.backend_url + '/api/bbs/' + pk + '/comments/');
  }

  getRubricsList(): Observable<Object[]> {
    return this.http.get<Object[]>(this.backend_url + '/api/rubrics/');
  }
}
