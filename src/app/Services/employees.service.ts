import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Employee {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Response {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Employee[];
  support: {
    url: string;
    text: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getEmployees(page: number, perPage: number): Observable<Response[]> {
    const url = `${this.apiUrl}?page=${page}&per_page=${perPage}`;
    return this.http.get<Response[]> (url);
  }





}
