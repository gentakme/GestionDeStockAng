import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Commande } from 'src/app/core/models/commande/commande';
import { CommandeService } from 'src/app/core/services/commande/commande.service';

@Component({
    selector: 'app-commande',
    providers: [MessageService],

    templateUrl: './commande.component.html',
    styleUrls: ['./commande.component.css'],
})
export class CommandeComponent implements OnInit {
    constructor(
        private commandeService: CommandeService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
      this.getList();
    }

    commandes: Commande[] = [];
    commande!: Commande;

    getList() {
        this.commandeService.getList().subscribe((res) => {
            this.commandes = res.items;
        });
    }
 

    deleteArticle(id: string) {
        this.commandeService.delete(id);
        this.messageService.add({
            severity: 'success',
            summary: 'Deleted',
            detail: 'Order was deleted!',
        });
        this.getList();
    }
}
