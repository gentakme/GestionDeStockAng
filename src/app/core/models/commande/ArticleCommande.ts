import { Article } from "../article/article";
import { Client } from "../client/client";

export interface ArticleCommande{
    id: string,
    name: string,
    price: number,
    quantity: number,
    count: number,
    dateCommande: Date,
    categorieType: string
 
}