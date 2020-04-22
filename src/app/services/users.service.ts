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
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  getProduct(id: any): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
      tap((prod: Product) => console.log(`added product w/ id=${prod._id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  
  updateProduct(id: any, product: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, product, httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct(id: any): Observable<Product> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  }