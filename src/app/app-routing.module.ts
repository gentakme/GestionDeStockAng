import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
 import { ClientAddComponent } from './components/client/client-add/client-add.component';
import { ClientComponent } from './components/client/client.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
    { path: 'article', component: ArticleComponent },
    { path: 'commande', component: CommandeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'client', component: ClientComponent },
    { path: 'clientAdd', component: ClientAddComponent },

 ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
