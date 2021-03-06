import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "../services/data.service";
import {throwIfAlreadyLoaded} from "./module.import.guard";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
