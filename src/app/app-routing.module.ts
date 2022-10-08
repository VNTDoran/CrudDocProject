import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { CreateCategoryComponent } from './employee/create-category/create-category.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CategoryListComponent } from './employee/category-list/category-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UpdateCategoryComponent } from './employee/update-category/update-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'categories', component: CreateCategoryComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'categorylist', component: CategoryListComponent },
  { path: 'updatecat/:id', component: UpdateCategoryComponent },



];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
