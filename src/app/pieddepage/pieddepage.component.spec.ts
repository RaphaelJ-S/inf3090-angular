import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieddepageComponent } from './pieddepage.component';

describe('PieddepageComponent', () => {
  let component: PieddepageComponent;
  let fixture: ComponentFixture<PieddepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieddepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieddepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
