import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoCreateComponent } from './components/views/evento/evento-create/evento-create.component';
import { EventoDeleteComponent } from './components/views/evento/evento-delete/evento-delete.component';
import { EventoReadAllComponent } from './components/views/evento/evento-read-all/evento-read-all.component';
import { EventoUpdateComponent } from './components/views/evento/evento-update/evento-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { LugarCreateComponent } from './components/views/lugar/lugar-create/lugar-create.component';
import { LugarDeleteComponent } from './components/views/lugar/lugar-delete/lugar-delete.component';
import { LugarReadComponent } from './components/views/lugar/lugar-read/lugar-read.component';
import { LugarUpdateComponent } from './components/views/lugar/lugar-update/lugar-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lugares',
    component: LugarReadComponent
  },
  {
    path: 'lugares/create',
    component: LugarCreateComponent
  },
  {
    path: 'lugares/delete/:id',
    component: LugarDeleteComponent
  },
  {
    path: 'lugares/update/:id',
    component: LugarUpdateComponent
  },
  {
    path: 'lugares/:id_lugar/eventos',
    component: EventoReadAllComponent
  },
  {
    path: 'lugares/:id_lugar/eventos/create',
    component: EventoCreateComponent
  },
  {
    path: 'lugares/:id_lugar/eventos/:id/update',
    component: EventoUpdateComponent
  },
  {
    path: 'lugares/:id_lugar/eventos/:id/delete',
    component: EventoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
