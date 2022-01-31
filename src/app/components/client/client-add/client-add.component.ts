import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { Article } from 'src/app/core/models/article/article';
import { Client } from 'src/app/core/models/client/client';
import { ArticleService } from 'src/app/core/services/article/article.service';
import { ClientService } from 'src/app/core/services/client/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css'],
  providers: [MessageService],
})
export class ClientAddComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private clientService: ClientService,
    private router: Router
  ) { }
  client!: Client;
  articles: Article[] = [];
  selectedProducts!: Article[];
  quantity: number[] = [];
  isOver!: boolean;
  articleForm = this.fb.group({
    count: new FormControl('', [
      Validators.required,
      Validators.min(1)
    ]),
  });
  clientForm = this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.nullValidator,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
      ),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{8}'),
    ]),
    quantity: new FormControl(''),
  });
  submitted!: boolean;
  ngOnInit(): void {
    this.submitted = false;
    this.isOver = false;
    console.log(this.selectedProducts);
    this.getListArticles();
    console.log(this.articleForm.get('count')?.value);
  }

  linearMode = true;



  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }

  getListArticles() {
    this.articleService.getArticles().subscribe((res) => {
      this.articles = res.items;
    });
  }

  insertClient(client: Client) { }
  validate() {
    this.submitted = true;
  }
  onSubmit() {
    this.submitted = true;

    console.log('not selected', this.selectedProducts?.length > 0)


    if (this.selectedProducts?.length > 0) {

      const quantity = this.selectedProducts.every(
        (x) => x?.quantity - x?.count >= 0  
      );
      const count = this.selectedProducts.every(
        (x) => x.count > 0
      );
      console.log('quantity', quantity)

      if (!quantity) {
        this.router.navigate(['/clientAdd']);
        this.messageService.add({
          severity: 'error',
          summary: 'Forbidden',
          detail: 'Ordered quantity is over the limit',
        });
      }
      else if(!count)
      {
        this.router.navigate(['/clientAdd']);
        this.messageService.add({
          severity: 'error',
          summary: 'Forbidden',
          detail: 'Please insert the correct quantity',
        });
      } 
      else {

        this.clientService.insertClient(
          this.selectedProducts,
          this.clientForm.value
        );
      }

    }
    else {
      this.router.navigate(['/clientAdd']);

      this.messageService.add({
        severity: 'info',
        summary: 'Select an Article',
        detail: 'Please, select an article before submitting!',
        sticky: false

      });
    }
    // console.log('sent')
  }
}
