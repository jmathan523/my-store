import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  // REFERENCE:: https://angular.io/guide/router#setting-up-redirects
  { path: '', redirectTo: '/product_list', pathMatch: 'full' },
  { path: 'product_list', component: ProductListComponent },
  { path: 'product_detail/:id', component: ProductDetailComponent },
  { path: 'check_out', component: CheckOutComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
