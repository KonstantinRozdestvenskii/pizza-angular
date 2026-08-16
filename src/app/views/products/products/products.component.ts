import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: ProductType[] = [];
  public loading: boolean = false;


  private subscription: Subscription | null = null;

  constructor(private productService: ProductService,
              private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // if (this.productService.getProducts()) {
    //   this.products = this.productService.getProducts();
    // }
    this.loading = true;
    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          this.router.navigate(['/']);
        }
      })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }


}
