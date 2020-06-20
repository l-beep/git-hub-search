import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubserachComponent } from './githubserach/githubserach.component';
import { CiustomPipe } from './ciustom.pipe';
import { CustomDirective } from './custom.directive';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UnfoundComponent } from './unfound/unfound.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubserachComponent,
    CiustomPipe,
    CustomDirective,
    GithubsearchDetailsComponent,
    RepositoriesComponent,
    UnfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
