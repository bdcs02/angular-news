import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForNewsComponent } from './search-for-news.component';

describe('SearchForNewsComponent', () => {
  let component: SearchForNewsComponent;
  let fixture: ComponentFixture<SearchForNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchForNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
