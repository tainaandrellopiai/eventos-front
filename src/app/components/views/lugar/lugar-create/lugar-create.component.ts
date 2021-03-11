import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lugar } from '../lugar-read/lugar.model';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar-create',
  templateUrl: './lugar-create.component.html',
  styleUrls: ['./lugar-create.component.css']
})
export class LugarCreateComponent implements OnInit {

  lugar: Lugar = {
    nome: '',
    capacidade: ''
  }

  constructor(private service: LugarService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.lugar).subscribe((_resposta) => {
      this.router.navigate(['lugares'])
      this.service.mensagem('Lugar criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message) //ver o back
      }
    })
  }

  cancel(): void {
    this.router.navigate(['lugares'])
  }
}
