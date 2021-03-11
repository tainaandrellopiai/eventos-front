import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
