import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../models/article/article';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    
    constructor(private http: HttpClient) {}
    
    insertArticlesList(entities: any) {
     this.http.post(`${environment.baseUrl}article/articles`, entities).subscribe(res=>{})
  }

  addArticle(article: Article) {
    this.http
          .post(`${environment.baseUrl}article/`, article)
          .subscribe((res) => {});
  }
  
  deleteArticle(id: string) {
      this.http.delete(`${environment.baseUrl}article/${id}`).subscribe(res=>{});
  }

  
  updateArticle(article: any): void {
      this.http
          .put(`${environment.baseUrl}article/${article.id}`, article)
          .subscribe((res) => {});
  }
  getArticles(): Observable<any> {
        return this.http.get<any>(environment.baseUrl + 'article/articlesList');
    }
}
