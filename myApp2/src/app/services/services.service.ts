import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = "https://fakestoreapi.com/products"

  constructor() { }
}
