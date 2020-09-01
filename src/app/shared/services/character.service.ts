import { Injectable } from '@angular/core';
import  {HttpClient, HttpErrorResponse} from "@angular/common/http"

import {Character} from "./../interfaces/character.interface";
import {environment} from "./../../../environments/environment";
import { Observable, throwError } from 'rxjs';
import { TrackHttpError } from "./../models/trackHttpError";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  searchCharacters(query = "",page = 200):Observable<Character[] | TrackHttpError>{
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter)
    .pipe(catchError((error)=>this.handleHttpError(error)));
  }

  getDetails(id : number){
    return this.http.get<Character>(`${environment.baseUrlAPI}/${id}`)
    .pipe(catchError((error)=>this.handleHttpError(error)));;
  }

  private handleHttpError(error : HttpErrorResponse):Observable<TrackHttpError>{
    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occured retrienving data";
    return throwError(dataError);
  }
}
