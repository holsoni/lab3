import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheldrenComponent } from './cheldren.component';

describe('CheldrenComponent', () => {
  let component: CheldrenComponent;
  let fixture: ComponentFixture<CheldrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheldrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheldrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
