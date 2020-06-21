import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubserachComponent } from './githubserach.component';

describe('GithubserachComponent', () => {
  let component: GithubserachComponent;
  let fixture: ComponentFixture<GithubserachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubserachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
