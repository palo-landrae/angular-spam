import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamPrinterComponent } from './spam-printer.component';

describe('SpamPrinterComponent', () => {
  let component: SpamPrinterComponent;
  let fixture: ComponentFixture<SpamPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpamPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
