import {Component, Input} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, Observable, switchMap} from "rxjs";
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
  products$: Observable<Array<Produit>>;
  searchTerm$ = new BehaviorSubject<string>('');

  constructor(private readonly apiService: ApiService) {
    this.products$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(search => this.apiService.filterCatalogue(search))
    );
  }

  onInputChange(value: string) {
    this.searchTerm$.next(value);
  }
}
