import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';

//Directives
import { DefaultImage } from '../directives/default-image';

//Services
import { ConvertedService } from "./../services/converter";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2, Page3
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConvertedService]
})
export class AppModule {}
