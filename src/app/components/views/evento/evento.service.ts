import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByLugar(id_lugar: String): Observable<Evento[]> {
    const url = `${this.baseUrl}/eventos?lugar=${id_lugar}`
    return this.http.get<Evento[]>(url)
  }
}
