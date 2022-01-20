import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommandeComponent } from './commande.component';



@NgModule({
  declarations: [CommandeComponent],
  exports: [CommandeComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    ToastModule,
    TableModule,
    RippleModule,
    DialogModule,
    CommonModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
    DataViewModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class CommandeModule { }
