import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signo } from '../Models/signo';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private readonly API = "http://localhost:3003/signos";

  constructor(private http: HttpClient) { }

  buscarTudo(): Observable<Signo[]>{
    return this.http.get<Signo[]>(this.API);
  }

  buscarPorId(id: number): Observable<Signo>{
    const url = `${this.API}/${id}`;
    return this.http.get<Signo>(url);
  }
}
