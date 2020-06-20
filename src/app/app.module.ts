import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubserachComponent } from './githubserach/githubserach.component';
import { CiustomPipe } from './ciustom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubserachComponent,
    CiustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
