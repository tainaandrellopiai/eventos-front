import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {

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
    this.id_lugar = this.route.snapshot.paramMap.get('id_lugar')!
  }

  create(): void {
    this.service.create(this.evento, this.id_lugar).subscribe((resposta) => {
      this.router.navigate([`lugares/${this.id_lugar}/eventos`])
      this.service.mensagem('Evento criado com sucesso!')
    }, err => {
      this.router.navigate([`lugares/${this.id_lugar}/eventos`])
      this.service.mensagem('Erro ao criar novo evento! Tente mais tarde!')
    })
  }

  cancel(): void {
    this.router.navigate([`lugares/${this.id_lugar}/eventos`])
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
