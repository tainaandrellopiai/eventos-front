import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-delete',
  templateUrl: './evento-delete.component.html',
  styleUrls: ['./evento-delete.component.css']
})
export class EventoDeleteComponent implements OnInit {

  id_lugar: String = ''

  evento: Evento = {
    id: '',
    nome: '',
    tipo: ''
  }

  constructor(private service: EventoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_lugar = this.route.snapshot.paramMap.get("id_lugar")!;
    this.evento.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`lugares/${this.id_lugar}/eventos`]);
  }

  findById(): void {
    this.service.findById(this.evento.id!).subscribe((resposta) => {
      this.evento = resposta
    })
  }

  delete(): void {
    this.service.delete(this.evento.id!).subscribe(() => {
      this.router.navigate([`lugares/${this.id_lugar}/eventos`]);
      this.service.mensagem('Evento deletado com sucesso!')
    }, err => {
      this.router.navigate([`lugares/${this.id_lugar}/eventos`]);
      this.service.mensagem('Falha ao deletar evento! Tente mais tarde')
    })
  }

}
