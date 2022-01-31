import { Client } from "../client/client";
import { ArticleCommande } from "./ArticleCommande";


export interface ClientCommandes{
    client: Client,
    articles: ArticleCommande []
 
}