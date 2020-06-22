import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SearchComponent } from './search/search.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { GitHubSearchFormComponent } from './git-hub-search-form/git-hub-search-form.component';
import { DateCountPipe } from './date-count.pipe';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { ColourDirective } from './colour.directive';
=======
import { GithubserachComponent } from './githubserach/githubserach.component';
import { CiustomPipe } from './ciustom.pipe';
import { CustomDirective } from './custom.directive';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UnfoundComponent } from './unfound/unfound.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { EndUsersComponent } from './end-users/end-users.component';
>>>>>>> 80ab15f95813ed3f0367352f4071df832a56d098

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SearchComponent,
    DisplayResultsComponent,
    GitHubSearchFormComponent,
    DateCountPipe,
    GitsearchComponent,
    GitsearchFormComponent,
    ColourDirective
=======
    GithubserachComponent,
    CiustomPipe,
    CustomDirective,
    GithubsearchDetailsComponent,
    RepositoriesComponent,
    UnfoundComponent,
    SearchFormComponent,
    EndUsersComponent
>>>>>>> 80ab15f95813ed3f0367352f4071df832a56d098
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
