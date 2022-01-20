import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article/article';
import { ArticleService } from 'src/app/core/services/article/article.service';
import { MessageService, SelectItem } from 'primeng/api';
import { CommandeService } from 'src/app/core/services/commande/commande.service';
import { Commande } from 'src/app/core/models/commande/commande';

@Component({
    selector: 'app-article',
    providers: [MessageService],

    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
    constructor(
        private articleService: ArticleService,
        private messageService: MessageService,
        private commandeService: CommandeService
    ) {}

    articles: Article[] = [];
    article: any;
    quantities!: SelectItem[];
    categorieType!: SelectItem[];
    productDialog!: boolean;
    submitted!: boolean;
    ngOnInit(): void {
        this.quantities = [
            { label: '10', value: 10 },
            { label: '20', value: 20 },
            { label: '50', value: 50 },
            { label: '60', value: 60 },
            { label: '80', value: 80 },
            { label: '100', value: 100 },
        ];

        this.categorieType = [
            { label: 'Informatique', value: 'Informatique' },
            { label: 'Vehicules', value: 'Vehicules' },
            { label: 'Immobilier', value: 'Immobilier' },
        ];
        this.getList();
    }

    getList() {
        this.articleService.getArticles().subscribe((res) => {
            this.articles = res.items;
        });
    }

    updateArticle(article: Article) {
        this.articleService.updateArticle(article);
        this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Article was updated',
        });
    }
    commande!: Commande;
    async deleteArticle(id: string) {
        var response = await this.commandeService
            .getCommandeByArticle(id)
            .toPromise();

        if (response) {
            this.messageService.add({
                severity: 'error',
                summary: 'Forbidden',
                detail: 'Article can not be deleted!',
            });
            return;
        }

        this.articleService.deleteArticle(id);
        this.messageService.add({
            severity: 'success',
            summary: 'Deleted',
            detail: 'Article was deleted!',
        });
        this.getList();
    }

    addArticle() {
        this.submitted = true;
        this.productDialog = false;

        this.articleService.addArticle(this.article);
        this.messageService.add({
            severity: 'success',
            summary: 'New',
            detail: 'Article was added!',
        });

        this.getList();
    }

    openNew() {
        this.article = {};
        this.submitted = false;
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
}
