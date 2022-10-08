import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categorys: Observable<ApiResponse>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  constructor(private categoryService: CategoryService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          $('#examplee').DataTable();
      });
      },2000);
      
    }

  ngOnInit() {
    this.categorys = this.categoryService.getCategorys();
    setTimeout(function(){
      $(function(){
        $('#examplee').DataTable();
    });
    },2000);

  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.categorys = this.categoryService.getCategorys();
        },
        error => console.log(error));
  }

  updateCategory(id: number){
    this.router.navigate(['updatecat', id]);
  }


}
