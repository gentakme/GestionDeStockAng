import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/article/article';
import { ArticleService } from 'src/app/core/services/article/article.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { CommandeService } from 'src/app/core/services/commande/commande.service';
import { Commande } from 'src/app/core/models/commande/commande';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

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
        private commandeService: CommandeService,
        private confirmationService: ConfirmationService,
        private fb: FormBuilder
    ) { }

    articles: Article[] = [];
    article: any;
    selectedProducts!: Article[];
    quantities!: SelectItem[];
    categorieType!: SelectItem[];
    productDialog!: boolean;
    submitted!: boolean;
    isDisabled!: boolean;
    articleForm = this.fb.group({
        id: new FormControl(),
        name: new FormControl(),
        categorieType: new FormControl(),
        quantity: new FormControl(),
        price: new FormControl(),
    });
    articleList = this.fb.group({
        items: this.fb.array([]),
    });



    
    formTest = this.fb.group({
        articles: this.fb.array([]),
    });
    ngOnInit(): void {
        this.isRequired = false;
        this.submitted = false;
        console.log('art', this.articleForm.value);
        this.isDisabled = true;
        this.quantities = [
            { label: '10', value: 10 },
            { label: '20', value: 20 },
            { label: '50', value: 50 },
            { label: '60', value: 60 },
            { label: '80', value: 80 },
            { label: '100', value: 100 },
        ];
        console.log('dd', this.articles);
        this.categorieType = [
            { label: 'Informatique', value: 'Informatique' },
            { label: 'Vehicules', value: 'Vehicules' },
            { label: 'Immobilier', value: 'Immobilier' },
        ];
        console.log('dis', this.isDisabled);
        this.getList();
    }

    newRow(): FormGroup {
        return this.fb.group({
            name: new FormControl(null, [
                Validators.minLength(2),
                Validators.required,
            ]),
            price: new FormControl('', [Validators.min(1),Validators.required]),
            quantity: new FormControl(10, [
                Validators.required,
             ]),
            categorieType: new FormControl('Informatique'),
        });
    }
    onDelete() { }
    onSave() {
        this.submitted = true;
  
         if (this.userFormGroups.invalid) {
             return;
        }

        var entities = this.formTest.get('articles')?.value;
        this.getList();

        this.articleService.insertArticlesList(entities);
        this.getList();
           
        this.userFormGroups.clear();
        this.getList();
        this.messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Article was updated',
        });
        this.isDisabled = true;

    }

    onUndo(i: number) {
        
        this.userFormGroups.removeAt(i);
    }

    generateNewRow() {
 
        this.isDisabled = false;
        console.log(this.formTest.value);

        return this.userFormGroups.push(this.newRow());
    }
    get articleListGroup(): FormArray {
        return this.articleList.get('items') as FormArray;
    }
    get userFormGroups(): FormArray {
         return this.formTest.get('articles') as FormArray;
    }

    onSubmit() {
        console.log(this.formTest.value);
    }

    getList() {
        this.articleService.getArticles().subscribe((res) => {
            this.articles = res.items;
        });
    }
    editArticle(article : any)
    {
        this.articleForm.patchValue(article);
        console.log(this.articleForm.value)
    }


    updateDisable(article : any) : boolean
    {

        if (article?.name || article?.price <= 0  ) { 
        
        return true;
        }
        return false;

    }
     isRequired!: boolean;
    updateArticle(article: any) {
      
        if (!article?.name || article?.price <= 0  ) { 
            this.isRequired = true;
            console.log("article name ",  article?.price <= 0 )
            console.log("article name ",  article?.name  )
            this.messageService.add({
                severity: 'warn',
                summary: 'Invalid data',
                detail: 'The row was not update!',
            });
 
         }
         else
         {

             this.articleService.updateArticle(article);
             this.messageService.add({
                 severity: 'success',
                 summary: 'Updated',
                 detail: 'Article was updated',
             });
         }
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
        this.getList();

        this.articleService.deleteArticle(id);
        this.getList();

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
        this.getList();
        this.messageService.add({
            severity: 'success',
            summary: 'New',
            detail: 'Article was added!',
        });
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

    confirm(id: string) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleteArticle(id);
                this.getList();
            },

            reject: () => { },
        });
        this.getList();
    }
}
