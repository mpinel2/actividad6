import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';
import { UsersservicesService } from 'src/app/services/usersservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrUsers: Profile[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private usersservicesService: UsersservicesService) { }

  ngOnInit(): void {
    this.gotoPage()
  }

  async gotoPage(pNum: number = 1): Promise<void> {
    try {
      let response = await this.usersservicesService.getAll(pNum)
      console.log(response);
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
      this.arrUsers = response.results;
      //console.log(this.arrUser)
    }
    catch (error) {
      console.log(error);
    }
  }
}