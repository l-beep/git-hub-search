import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubserachComponent } from './githubserach/githubserach.component';
import { CiustomPipe } from './ciustom.pipe';
import { CustomDirective } from './custom.directive';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubserachComponent,
    CiustomPipe,
    CustomDirective,
    GithubsearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
