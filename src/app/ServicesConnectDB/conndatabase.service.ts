import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NONE_TYPE } from '@angular/compiler';

const httpOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConndatabaseService {
  public Url = 'http://dauthauonline.tk/';
  public data = [] ;

  constructor(private http:HttpClient) { }

  getDB():Observable<any>{
    return this.http.get(this.Url).pipe(
      tap(res => JSON.stringify(res)),
      catchError(error => of([]))
    );
  }
  PutDB(idTable:string): Observable<any> {
    return this.http.post(`${this.Url}/${idTable}`, httpOption).pipe(
      tap(res => JSON.stringify(res)),
      catchError(error => of([]))
    );
  }

}
