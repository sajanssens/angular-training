import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersContainerComponent } from './users-container.component';

describe('UsersComponent', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'Users'`, () => {
    const fixture = TestBed.createComponent(UsersContainerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Users');
  });
});
