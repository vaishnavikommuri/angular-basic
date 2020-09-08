import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home//filter/filter.component';
import { ResultsComponent } from './home/results/results.component';
import { ArticleComponent } from './article/article.component'

import { FormsModule } from '@angular/forms';
import { FilterService } from './shared/services/filter.service';
import { ResultsService } from './shared/services/results.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    ResultsComponent,
    ArticleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    FilterService,
    ResultsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
