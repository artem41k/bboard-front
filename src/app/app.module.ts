import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BbListComponent } from './bb-list/bb-list.component';
import { BbDetailComponent } from './bb-detail/bb-detail.component';

import { BbService } from './bb.service';
import { RubricsListComponent } from './rubrics-list/rubrics-list.component';
import { ByRubricComponent } from './by-rubric/by-rubric.component';

registerLocaleData(localeRu, 'ru', localeRuExtra);

const appRoutes: Routes = [
  {path: 'rubric/:pk', component: ByRubricComponent},
  {path: 'bb/:pk', component: BbDetailComponent},
  {path: '', component: BbListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BbListComponent,
    BbDetailComponent,
    RubricsListComponent,
    ByRubricComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BbService,
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
