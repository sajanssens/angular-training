import { inject, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';


describe('UserService', () => {
  let service: UserService;


  // 1st beforeEach: to setup this mini module
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
      // or for a complete mock:
      // providers: [
      //   {
      //     provide: UserService,
      //     useValue: {
      //       data: [
      //         { name: 'Sander' },
      //         { name: 'Bram' },
      //         { name: 'Ruben' }
      //       ],
      //       add: () => { },
      //       users: () => { },
      //       // contacts$: of(MOCK_CONTACTS)
      //     }
      //   }
      // ]
    }).compileComponents();    
  })

  // 2nd beforeEach: to use DI within the module that was set up above
  beforeEach(inject([UserService], (s: UserService) => {
    // for a spy:
    // spyOn(s, 'users').and.returnValue([
    //   { name: 'Sander' },
    //   { name: 'Bram' },
    //   { name: 'Ruben' }
    // ]);
    s.data = [
      { name: 'X' },
      { name: 'Y' },
      { name: 'Z' }
    ];
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all users', () => {
    expect(service.users().length).toBe(3);
  });

  it('should add user', () => {
    service.add({ name: 'abc' });
    expect(service.users().length).toBe(4);
  });
});
