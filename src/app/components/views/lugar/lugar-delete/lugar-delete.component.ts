import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lugar } from '../lugar-read/lugar.model';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar-delete',
  templateUrl: './lugar-delete.component.html',
  styleUrls: ['./lugar-delete.component.css']
})
export class LugarDeleteComponent implements OnInit {

  lugar: Lugar = {
    id: '',
    nome: '',
    capacidade: ''
  }

  constructor(private service: LugarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.lugar.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.lugar.id!).subscribe((resposta) => {
      this.lugar = resposta
      console.log(this.lugar)
    })
  }

  delete(): void {
    this.service.delete(this.lugar.id!).subscribe((resposta) => {
      this.router.navigate(['lugares'])
      this.service.mensagem('Lugar deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['lugares'])
  }

}
