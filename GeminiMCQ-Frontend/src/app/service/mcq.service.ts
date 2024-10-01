import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McqService {
  private baseUrl:string = "http://localhost:8080/api";

  constructor(
    private httpClient:HttpClient
  ) {}

  getQuestionList(topic:string): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}/query`, topic);
  }
}
