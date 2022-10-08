import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Category } from '../model/category.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/categorie/getAll';

  

  getCategorys() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createCategory(category: Category): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, category);
  }

  updateCategory(id: number, category: Category): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + category.id, category);
  }

  deleteCategory(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}