import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article/article';
import { Commande, Order } from 'src/app/core/models/commande/commande';
import { ArticleService } from 'src/app/core/services/article/article.service';
import { CommandeService } from 'src/app/core/services/commande/commande.service';
import { CommandeModule } from '../commande/commande.module';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
    constructor(
        private articleServices: ArticleService,
        private commandeService: CommandeService
    ) {}

    ngOnInit(): void {
        this.getArticles();
     }
    articles: Article[] = [];
    commande!: Order;
    getArticles() {
        this.articleServices
            .getArticles()
            .subscribe((res) => (this.articles = res.items));
    }

    insertCommande(article: Article) {
    
       let commande = {
         "articleId": article.id
       }
        this.commandeService.add(commande);
        this.getArticles();

    }
}
