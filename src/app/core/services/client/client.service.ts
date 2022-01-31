import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../../models/article/article';
import { Client } from '../../models/client/client';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  
  updateClient(client: any) {
    this.http.put(`${environment.baseUrl}Client/${client.id}`, client).subscribe(res=> {})
  }
    getClients(): Observable<any> {
        return this.http.get<any>(`${environment.baseUrl}client`);
    }

    insertClient(articles: any, client: any) {
        console.log(articles);
        let input = {
            client: client,
            articles: articles,
        };
        this.http
            .post(`${environment.baseUrl}Commande/ClientCommands`, input)
            .subscribe((res) => {});
    }

    deleteClient(id : any)
    {
      console.log("delete",id);
      this.http.delete(`${environment.baseUrl}Client/${id}`).subscribe(res=> {});
    }
}
