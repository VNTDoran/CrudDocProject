import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: number;
  category: Category;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.category = new Category();

    this.id = this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id)
      .subscribe(data => {
        console.log(data)
        this.category = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.categoryService.updateCategory(this.id, this.category)
      .subscribe(data => console.log(data), error => console.log(error));
    this.category = new Category();
    this.router.navigate(['/categorylist']);
    }

  
  list(){
    this.router.navigate(['categorylist']);
  }
}