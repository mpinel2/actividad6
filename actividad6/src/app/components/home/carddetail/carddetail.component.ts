import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';
import { UsersservicesService } from 'src/app/services/usersservices.service';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.css']
})
export class CarddetailComponent {
  @Input() myUser!: Profile;

  constructor(private usersServices: UsersservicesService){ }

  async deleteUser(pId: number | undefined): Promise<void> {
    if (pId !== undefined) {
      try {
        let response = await this.usersServices.delete(pId);
        if (!response) {
          alert('Usuario borrado correctamente')
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

}
