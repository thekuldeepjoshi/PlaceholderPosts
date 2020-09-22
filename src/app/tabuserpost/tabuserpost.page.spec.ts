import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabuserpostPage } from './tabuserpost.page';

describe('TabuserpostPage', () => {
  let component: TabuserpostPage;
  let fixture: ComponentFixture<TabuserpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabuserpostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabuserpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
