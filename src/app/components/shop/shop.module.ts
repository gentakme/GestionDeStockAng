import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import { ShopComponent } from './shop.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NbCardModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShopComponent],
  exports: [ShopComponent],

  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    NbCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule
    
  ]
})
export class ShopModule { }
