import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageBarComponent } from './new-message-bar.component';

describe('NewMessageBarComponent', () => {
  let component: NewMessageBarComponent;
  let fixture: ComponentFixture<NewMessageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
