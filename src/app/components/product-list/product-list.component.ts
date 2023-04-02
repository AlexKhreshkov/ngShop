import {Component, Input} from '@angular/core';
import {IProduct, products} from "../../Products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = products
  filteredProducts: IProduct[] = products
  @Input()
  search: string = ""

  findProduct($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.search = target.value;
    const res: IProduct[] = []
    for (let product of this.products) {
      if (product.name.toLowerCase().includes(this.search.toLowerCase())) {
        res.push(product)
      }
    }
    this.filteredProducts = res
  }
  logProduct() {
    console.log(this.products)
  }
  logString() {
    console.log(1)
    console.log(this.search)
  }
}
