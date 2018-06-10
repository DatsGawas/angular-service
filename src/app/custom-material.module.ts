/**
 * Created by dattaram on 9/6/18.
 */


import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule, MatSelectModule} from "@angular/material";
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatGridListModule]
})

export class MyOwnCustomMaterialModule{

}
