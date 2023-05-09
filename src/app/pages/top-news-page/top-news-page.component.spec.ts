import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsPageComponent } from './top-news-page.component';

describe('TopNewsPageComponent', () => {
  let component: TopNewsPageComponent;
  let fixture: ComponentFixture<TopNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNewsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
