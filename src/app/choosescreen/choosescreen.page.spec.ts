import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosescreenPage } from './choosescreen.page';

describe('ChoosescreenPage', () => {
  let component: ChoosescreenPage;
  let fixture: ComponentFixture<ChoosescreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosescreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosescreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
