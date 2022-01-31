import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ClientComponent } from './client.component';
import {
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbMenuModule,
    NbStepperModule,
    NbTreeGridModule,
} from '@nebular/theme';
import { ClientAddComponent } from './client-add/client-add.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

 import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ArticleModule } from '../article/article.module';
import { TooltipModule } from 'primeng/tooltip';
 
@NgModule({
    declarations: [ClientComponent, ClientAddComponent],
    imports: [
        ReactiveFormsModule,
      ArticleModule,
      RadioButtonModule,
      NbMenuModule,
      CheckboxModule,
      NbLayoutModule,
        AppRoutingModule,
        NbButtonModule,
        NbInputModule,
        NbStepperModule,
        NbIconModule,
        NbTreeGridModule,
        NbCardModule,
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
        HttpClientModule,
        DataViewModule,
        BrowserModule,
        TooltipModule,
        BrowserAnimationsModule,
    ],
})
export class ClientModule {}
