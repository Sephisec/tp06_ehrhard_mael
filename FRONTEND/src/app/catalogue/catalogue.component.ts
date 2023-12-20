import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Produit} from "../models/produit";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  @Input() nom: string;
  @Input() prenom: string;
  produits$: Observable<Array<Produit>>;
  searchTerm: string;

  constructor(private readonly apiService: ApiService) {
    this.filterCatalogue("");
  }

  filterCatalogue(filter: string) {
    this.produits$ = this.apiService.filterCatalogue(filter);
  }
}
