import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-read-all',
  templateUrl: './evento-read-all.component.html',
  styleUrls: ['./evento-read-all.component.css']
})
export class EventoReadAllComponent implements OnInit {


  displayedColumns: string[] = ['id', 'nome', 'tipo', 'acoes'];

  id_lugar: String = ''

  eventos: Evento[] = []

  constructor(private service: EventoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_lugar = this.route.snapshot.paramMap.get('id_lugar')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByLugar(this.id_lugar).subscribe((resposta) => {
      this.eventos = resposta;
      console.log(this.eventos);
    })
  }

  navegarParaCriarEvento(): void {
    this.router.navigate([`lugares/${this.id_lugar}/eventos/create`])
  }

}
