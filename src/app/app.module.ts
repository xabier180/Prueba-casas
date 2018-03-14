import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CasasComponent } from './casas/casas.component';
import { DetalleCasasComponent } from './casas/detalle-casas/detalle-casas.component';
import { TodosService } from './providers/todos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Pipes
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CasasComponent,
    FilterPipe,
    DetalleCasasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
