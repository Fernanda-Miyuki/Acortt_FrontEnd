import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts():Observable<Product[]> {
    //return this.http.get<Product[]>('http://192.168.86.30:8080/prod');
    return this.http.get<Product[]>('http://192.168.86.30:8080/home');
  }
}
