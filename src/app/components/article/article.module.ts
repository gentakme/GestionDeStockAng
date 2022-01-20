import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './article.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { TabViewModule } from 'primeng/tabview'
import {DialogModule} from 'primeng/dialog';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';


@NgModule({
    declarations: [ArticleComponent],
    exports: [ArticleComponent],

    imports: [
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
        BrowserAnimationsModule,
        
    ],
})
export class ArticleModule {}
