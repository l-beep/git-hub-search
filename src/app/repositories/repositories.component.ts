import { Component, OnInit } from '@angular/core';
import {Repository} from 'src/app/repository';
import {User} from 'src/app/user';
import { GitsearcherService } from 'src/app/Gitsearch/gitsearcher.service'
import { git-hub-search-formComponent } from 'src/app/git-hub-search-form/git-hub-search-form.component';
import { GitsearchComponent } from 'src/app/gitsearch/git-search.component';
import { AppComponent } from 'src/app/app.component';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  details: any;
  repos: any;
  username:string;


  constructor(private gitsearcherService: GitsearcherService) { }

  ngOnInit() {
  }
findUser(){

  this.gitsearcherService.getRepoInfo().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
})

}
}

