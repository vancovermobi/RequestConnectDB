import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// 'Content-Type' : 'application/json', 'application/x-www-form-urlencoded; charset=UTF-8' 
const httpOption = {
  headers: new HttpHeaders({  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class ConndatabaseService {
  public Url = 'http://dauthauonline.tk';
  public data = [] ;

  constructor(private http:HttpClient) { }

  getDB():Observable<any>{
    return this.http.get(this.Url).pipe(
      tap(res => JSON.stringify(res)),
      catchError(error => of([]))
    );
  }
 // http://localhost/PHP_MVC/test.php
// return this.http.post(`${this.Url}/${Tb}`,Sql, httpOption).pipe( JSON.stringify(data)
  PutDB(Tb:string , Sql:string): Observable<any> {
    let data = { Tb: 'BACDAOTAO', Sql : 'SELECT * FROM BACDAOTAO' };
    return this.http.post(this.Url +"/test.php" , JSON.stringify(data) , httpOption).pipe(
      tap(res => console.log(res)),
      catchError(error => of([]))
    );
  }
}
