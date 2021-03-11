import { LiveAnnouncerDefaultOptions } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lugar } from './lugar-read/lugar.model';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Lugar[]> {
    const url = `${this.baseUrl}/lugares`
    return this.http.get<Lugar[]>(url)
    
  }

  findById(id: String): Observable<Lugar> {
    const url = `${this.baseUrl}/lugares/${id}`
    return this.http.get<Lugar>(url)
  }

  create(lugar: Lugar): Observable<Lugar>{
    const url = `${this.baseUrl}/lugares`
    return this.http.post<Lugar>(url, lugar);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/lugares/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })

  }
}
