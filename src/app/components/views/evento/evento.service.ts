import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByLugar(id_lugar: String): Observable<Evento[]> {
    const url = `${this.baseUrl}/eventos?lugar=${id_lugar}`
    return this.http.get<Evento[]>(url)
  }

  findById(id: String): Observable<Evento> {
    const url = `${this.baseUrl}/eventos/${id}`
    return this.http.get<Evento>(url)
  }

  update(evento: Evento): Observable<Evento> {
    const url = `${this.baseUrl}/eventos/${evento.id}`
    return this.http.put<Evento>(url, evento)
  }

  create(evento: Evento, id_lugar: String): Observable<Evento[]> {
    const url = `${this.baseUrl}/eventos?lugar=${id_lugar}`
    return this.http.post<Evento[]>(url, evento)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })

  }
}
