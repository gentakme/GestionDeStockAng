import { Client } from "../client/client";

export interface Commande {
    id?: string;
    articleId?: string;
    articleName?: string;
    dateCommande?: Date;
    client: Client;
    quantity: number;

}

export interface Order{
    articleId: string;

}