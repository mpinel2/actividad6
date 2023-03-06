import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile.interface';
import { UsersservicesService } from 'src/app/services/usersservices.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  myUser!: Profile | any;

  constructor(
    private userservicesServices: UsersservicesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = parseInt(params.userid);
      let response: any = await this.userservicesServices.getbyId(id);
      this.myUser = response.results
    })
  }

}
