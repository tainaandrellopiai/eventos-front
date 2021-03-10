import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lugar } from './lugar-read/lugar.model';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Lugar[]> {
    const url = `${this.baseUrl}/busca_lugar`
    return this.http.get<Lugar[]>(url)
    
  }
}
