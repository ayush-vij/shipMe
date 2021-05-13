import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MajorfeedPage } from './majorfeed.page';

describe('MajorfeedPage', () => {
  let component: MajorfeedPage;
  let fixture: ComponentFixture<MajorfeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorfeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MajorfeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
