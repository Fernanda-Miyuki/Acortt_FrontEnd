import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getPhones(): Observable<Product[]> {
    return this.http.get<any>('http://192.168.86.30:8080/home').pipe(
      map(response => response.celulares)
    );
  }

  public getComputers(): Observable<Product[]> {
    return this.http.get<any>('http://192.168.86.30:8080/home').pipe(
      map(response => response.computadores)
);
}

}
