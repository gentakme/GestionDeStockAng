import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { ShopComponent } from './shop.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [ShopComponent],
  exports: [ShopComponent],

  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule
    
  ]
})
export class ShopModule { }
