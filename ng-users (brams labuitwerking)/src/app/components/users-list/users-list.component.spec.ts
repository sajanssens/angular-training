import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { UsersListComponent } from './users-list.component';

describe('UsersComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent, AppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UsersComponent when parent has 6 users', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    component.users = [
      { "id": 1, name: 'Jochem' },
      { "id": 2, name: 'Bram' },
      { "id": 3, name: 'Ruben' },
      { "id": 4, name: 'Sander' },
      { "id": 5, name: 'Jonas' },
      { "id": 6, name: 'Glenn' }
    ];
    fixture.detectChanges();
  });

  it('should render six users', async(() => { // let op async!
    fixture.whenStable().then(() => {
      expect(fixture.nativeElement.querySelectorAll('tr').length).toBe(6);
    });
  }));
});
