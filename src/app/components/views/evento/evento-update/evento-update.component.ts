import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {

  id_lugar: String = ''

  evento: Evento = {
    id: '',
    nome: '',
    tipo: ''
  }

  nome = new FormControl('', [Validators.minLength(3)])
  tipo = new FormControl('', [Validators.minLength(3)])

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

  update(): void {
    this.service.update(this.evento).subscribe((resposta) => {
      this.router.navigate([`lugares/${this.id_lugar}/eventos`])
      this.service.mensagem('Evento atualizado com sucesso!');
    }, err => {
      this.router.navigate([`lugares/${this.id_lugar}/eventos`])
      this.service.mensagem('Falha ao atualizar evento! Tente mais tarde..');
    })
  }

  getMessage() {
    if(this.nome.invalid) {
      return "O campo NOME deve conter entre 3 e 100 caracteres";
    }

    if(this.tipo.invalid) {
      return "O campo TIPO deve conter entre 3 e 100 caracteres";
    }

    return false;
  }

}
