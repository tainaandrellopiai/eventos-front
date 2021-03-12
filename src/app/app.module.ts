import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { LugarReadComponent } from './components/views/lugar/lugar-read/lugar-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LugarCreateComponent } from './components/views/lugar/lugar-create/lugar-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LugarDeleteComponent } from './components/views/lugar/lugar-delete/lugar-delete.component';
import { LugarUpdateComponent } from './components/views/lugar/lugar-update/lugar-update.component';
import { EventoReadAllComponent } from './components/views/evento/evento-read-all/evento-read-all.component';
import { EventoCreateComponent } from './components/views/evento/evento-create/evento-create.component';
import { EventoUpdateComponent } from './components/views/evento/evento-update/evento-update.component';
import { EventoDeleteComponent } from './components/views/evento/evento-delete/evento-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LugarReadComponent,
    LugarCreateComponent,
    LugarDeleteComponent,
    LugarUpdateComponent,
    EventoReadAllComponent,
    EventoCreateComponent,
    EventoUpdateComponent,
    EventoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
