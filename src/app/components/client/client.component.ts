import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/core/models/client/client';
import { ClientService } from 'src/app/core/services/client/client.service';
import { CommandeService } from 'src/app/core/services/commande/commande.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
    providers: [MessageService],
})
export class ClientComponent implements OnInit {
    clients: Client[] = [];
    client!: Client;
    
    clientDialog!: boolean;
    submitted!: boolean;
    constructor(
        private clientService: ClientService,
        private commandeService: CommandeService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.getList();
        
    }

    getList() {
        this.clientService.getClients().subscribe((res) => {
            this.clients = res.items;
        });
    }

    async delete(id: string) {
        var response = await this.commandeService
            .getCommandeByClient(id)
            .toPromise();
        console.log('response', response);

        if (response) {
            this.messageService.add({
                severity: 'error',
                summary: 'Forbidden',
                detail: 'Client can not be deleted!',
            });
            return;
        }
        this.clientService.deleteClient(id);
        this.getList();
        this.messageService.add({
            severity: 'success',
            summary: 'Deleted',
            detail: 'Client was deleted!',
        });
    }

    update(client: any) {
        this.clientService.updateClient(client);
    }
    openNew() {
        this.client;
        this.submitted = false;
        this.clientDialog = true;
    }

    hideDialog() {
        this.clientDialog = false;
        this.submitted = false;
    }
}
