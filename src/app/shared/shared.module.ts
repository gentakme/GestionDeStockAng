import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    ConfirmPopupModule,
    CommonModule,

  ],
  providers: [ConfirmationService]

})
export class SharedModule { }
