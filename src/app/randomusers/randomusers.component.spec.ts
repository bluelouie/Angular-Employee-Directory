import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomusersComponent } from './randomusers.component';

describe('RandomusersComponent', () => {
  let component: RandomusersComponent;
  let fixture: ComponentFixture<RandomusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
