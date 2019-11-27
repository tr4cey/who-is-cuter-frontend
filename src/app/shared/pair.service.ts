import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pair } from './pair';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PairService {

  baseurl = 'http://31.220.49.91';

  constructor(private http: HttpClient) { }

  GetPair(id): Observable<Pair> {
    return this.http.get<Pair>(this.baseurl + '/getPair/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  VotePic1(id): Observable<Pair> {
    return this.http.get<Pair>(this.baseurl + '/votePic1/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  VotePic2(id): Observable<Pair> {
    return this.http.get<Pair>(this.baseurl + '/votePic2/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
