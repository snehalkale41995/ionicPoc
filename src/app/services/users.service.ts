import { Observable, of, throwError } from 'rxjs';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import AppConfig from '../../appConstants/appConfig.js'

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
  export class usersService {
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getUsers(): Observable<any> {
    const apiUrl = `${AppConfig.serverURL}/employees`;
    return this.http.get(apiUrl, httpOptions).pipe(
      map( this.extractData),
      catchError(this.handleError));
  }

  
private extractData(res: Response) {
  console.log("response", res);
  let body = res.data;
  return body || { };
}
  
  getUser(id: any): Observable<any> {
    const url = `${AppConfig.serverURL}/employee/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<any>(`getUser id=${id}`))
    );
  }
  
  postUser(data): Observable<any> {
    const url = `${AppConfig.serverURL}/create`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updateUser(data): Observable<any> {
    const url = `${AppConfig.serverURL}/update/${data.id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteUser(id: string): Observable<{}> {
  const url = `${AppConfig.serverURL}/delete/${id}`
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  }