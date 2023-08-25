import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacMainComponent } from './mac-main.component';

describe('MacMainComponent', () => {
  let component: MacMainComponent;
  let fixture: ComponentFixture<MacMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
