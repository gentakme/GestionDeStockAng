import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ArticleModule } from './components/article/article.module';
 import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {  NbContextMenuModule, NbActionsModule, NbMenuModule, NbTabsetModule } from '@nebular/theme';
import { CommandeModule } from './components/commande/commande.module';
import {AccordionModule} from 'primeng/accordion';
import { ShopComponent } from './components/shop/shop.component';
import { ShopModule } from './components/shop/shop.module';
import {TreeNode} from 'primeng/api';

import {MenubarModule} from 'primeng/menubar';
import { ClientModule } from './components/client/client.module';
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
  ],
  exports:[
    AppComponent
  ],
  imports: [
    FormsModule,
    ClientModule,
    MenubarModule,
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule,
    NbMenuModule.forRoot(),
    NbTabsetModule,
    NbContextMenuModule,
    NbSidebarModule.forRoot(),
    CommandeModule,
    AccordionModule,
    ShopModule,
    NbIconModule,
    NbCardModule,
    NbEvaIconsModule
      
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
