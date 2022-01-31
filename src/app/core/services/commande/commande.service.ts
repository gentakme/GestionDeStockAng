import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande, Order } from '../../models/commande/commande';

@Injectable({
    providedIn: 'root',
})
export class CommandeService {
    constructor(private http: HttpClient) {}

    getList(): Observable<any> {
        return this.http.get<any>(`${environment.baseUrl}commande/`);
    }

    add(commande: any) {  
        this.http
            .post(`${environment.baseUrl}commande/`, commande)
            .subscribe((res) => {});
    }

    delete(id: string) {
        this.http
            .delete(`${environment.baseUrl}commande/${id}`)
            .subscribe((res) => {});
    }

    update(commande: any): void {
        this.http
            .put(`${environment.baseUrl}commande/${commande.id}`, commande)
            .subscribe((res) => {});
    }

    getCommandeByArticle(id : any) : Observable<any>
    {
       return this.http.get(`${environment.baseUrl}commande/commandeByArticle/${id}`);
      
    }
    getCommandeByClient(id : any) : Observable<any>
    {
       return this.http.get(`${environment.baseUrl}commande/${id}/commandeByClient/`);
      
    }
}
