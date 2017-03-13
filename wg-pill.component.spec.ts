import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgPillComponent } from './wg-pill.component';

describe('WgPillComponent', () => {
  let component: WgPillComponent;
  let fixture: ComponentFixture<WgPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
