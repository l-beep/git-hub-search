import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubSearchFormComponent } from './git-hub-search-form.component';

describe('GitHubSearchFormComponent', () => {
  let component: GitHubSearchFormComponent;
  let fixture: ComponentFixture<GitHubSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
