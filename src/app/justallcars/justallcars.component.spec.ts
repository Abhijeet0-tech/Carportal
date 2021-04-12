import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustallcarsComponent } from './justallcars.component';

describe('JustallcarsComponent', () => {
  let component: JustallcarsComponent;
  let fixture: ComponentFixture<JustallcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustallcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustallcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
