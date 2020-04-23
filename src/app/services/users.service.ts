// import { Injectable } from '@angular/core';
// import {Http, Response, Headers, RequestOptions} from '@angular/http'


// let api_url : string = 'http://dummy.restapiexample.com/api/v1/employees';

// @Injectable({
//   providedIn: 'root'
// })

// export class usersService {
    
// constructor(private _http: Http){}
//    id:number;
//    public headers = new Headers({ 'Content-Type': 'application/json'});
   
//     getUsers()
//     {
//      return this._http.get(api_url);
//     }
    
//      addUser(userData)
//      {
//      return this._http.post(api_url,userData).toPromise(); 
//      }
     
//       deleteUser(userData)
//      {
//       const url = `${"http://localhost:4000/api/book"}/${userData}`;
//       return this._http.delete(url, {headers: this.headers}).toPromise();
   
//      }

//       updateUser(userData)
//      {
//       return this._http.put(api_url, userData).toPromise();
   
//      }
//  }


// import {Http, Response, Headers, RequestOptions} from '@angular/http'


// let api_url : string = 'http://dummy.restapiexample.com/api/v1/employees';

// @Injectable({
//   providedIn: 'root'
// })

// export class usersService {
    
// constructor(private _http: Http){}
//    id:number;
//    public headers = new Headers({ 'Content-Type': 'application/json'});
   
//     getUsers()
//     {
//      return this._http.get(api_url);
//     }
    
//      addUser(userData)
//      {
//      return this._http.post(api_url,userData).toPromise(); 
//      }
     
//       deleteUser(userData)
//      {
//       const url = `${"http://localhost:4000/api/book"}/${userData}`;
//       return this._http.delete(url, {headers: this.headers}).toPromise();
   
//      }

//       updateUser(userData)
//      {
//       return this._http.put(api_url, userData).toPromise();
   
//      }
//  }

import { Observable, of, throwError } from 'rxjs';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Product } from './product';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  const apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';

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
  
  getProductById(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getProducts(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map( this.extractData),
      catchError(this.handleError));
  }

  
private extractData(res: Response) {
  console.log("response", res)
  let body = res.data;
  return body || { };
}
  
  getProduct(id: any): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  
  postProduct(data): Observable<any> {
    const url = `${apiUrl}/add_with_students`;
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updateProduct(id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteProduct(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  }