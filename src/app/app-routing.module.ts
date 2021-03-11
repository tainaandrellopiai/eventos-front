import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { LugarCreateComponent } from './components/views/lugar/lugar-create/lugar-create.component';
import { LugarReadComponent } from './components/views/lugar/lugar-read/lugar-read.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
