import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayprocessPage } from './payprocess.page';

describe('PayprocessPage', () => {
  let component: PayprocessPage;
  let fixture: ComponentFixture<PayprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayprocessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
