import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lugar } from '../lugar-read/lugar.model';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar-update',
  templateUrl: './lugar-update.component.html',
  styleUrls: ['./lugar-update.component.css']
})
export class LugarUpdateComponent implements OnInit {

  lugar: Lugar = {
    id: '',
    nome: '',
    capacidade: ''
  }

  constructor(private service: LugarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.lugar.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.lugar.id!).subscribe((resposta) => {
      this.lugar = resposta;
    });
  }

  update(): void {
    this.service.update(this.lugar).subscribe((resposta) => {
      this.router.navigate(['lugares']);
      this.service.mensagem('Lugar atualizado com sucesso!');
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['lugares'])
  }

}
