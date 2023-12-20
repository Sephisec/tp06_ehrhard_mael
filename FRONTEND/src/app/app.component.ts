import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Produit } from './models/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  login = '';
  password = '';

  nom = '';
  prenom = '';
  cnx = false;
  produits$: Observable<Array<Produit>>;
  constructor(private apiService: ApiService) {
    this.produits$ = this.apiService.getCalague();
  }
  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.cnx = true;
    });
  }
}
