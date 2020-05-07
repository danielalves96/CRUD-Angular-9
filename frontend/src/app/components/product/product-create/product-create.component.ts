import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  
  }

  createProduct(): void {
    this.productService.showMensage('Operação realizada com sucesso')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
