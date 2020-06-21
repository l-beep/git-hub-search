import { Component, OnInit } from '@angular/core';
import {Repository} from 'src/app/repository';
import {GitsearcherService} from 'src/app/Gitsearch/gitsearcher.service'
import {User} from 'src/app/user';
import { git-hub-searchComponent } from 'src/app/git-hub-search/git-hub-search.component';
import { AppComponent } from 'src/app/app.component';
import {FormsModule} from '@angular/forms';





@Component({
  selector: 'app-git-hub-search-form',
  templateUrl: './git-hub-search-form.component.html',
  styleUrls: ['./git-hub-search-form.component.css']
})
export class GitHubSearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
