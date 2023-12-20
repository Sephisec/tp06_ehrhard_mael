import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Produit} from "../models/produit";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  @Input() nom: string;
  @Input() prenom: string;
  @Input() produits$: Observable<Array<Produit>>;
}
