
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category.model';

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from '@angular/router';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();
  submitted = false;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.categoryService.createCategory(this.category)
    .subscribe(data => console.log(data), error => console.log(error));
    this.category = new Category();
    this.router.navigate(['/categories']);
  }

 
}

 

  


  
    
  
  


