import { Component, OnInit } from '@angular/core';

import { EmployeesService } from './Services/employees.service';


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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  employees: Employee [] =[]
  totalItems!: number;
  itemsPerPage: number = 6;
  currentPage: number = 1;
  p:number = this.currentPage;
  collection :number = this.totalItems ;



  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.employeesService.getEmployees(this.currentPage, this.itemsPerPage)
      .subscribe((res:any) => {
        this.employees = res.data;
        this.totalItems = res.total;

      },
      (err) => {
        console.error(err);
      }

      );
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getEmployees();
  }

  sendEmail(email: string) {
    const mailtoUrl = `mailto:${email}`;
    window.location.href = mailtoUrl;
  }



}

