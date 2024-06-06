import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsModalComponent } from './cats-modal.component';

describe('CatsModalComponent', () => {
  let component: CatsModalComponent;
  let fixture: ComponentFixture<CatsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
