import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsProofComponent } from './items-proof/items-proof.component';
import { ItemsCodeComponent } from './items-code/items-code.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items-proof' },
  { path: 'items-proof', component: ItemsProofComponent },
  { path: 'items-code', component: ItemsCodeComponent },
  { path: 'item-edit/:id', component: ItemEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
