import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { GitHubSearchFormComponent } from './git-hub-search-form/git-hub-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayResultsComponent,
    GitHubSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
