import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LugarService } from '../lugar.service';
import { Lugar } from './lugar.model';

@Component({
  selector: 'app-lugar-read',
  templateUrl: './lugar-read.component.html',
  styleUrls: ['./lugar-read.component.css']
})
export class LugarReadComponent implements OnInit {

  lugares: Lugar[] = []

  displayedColumns: string[] = ['id', 'nome', 'capacidade', 'eventos', 'acoes'];

  constructor(private service: LugarService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.lugares = resposta;
    })
  }

  navegarParaLugarCreate() {
    this.router.navigate(["lugares/create"])
  }

}
