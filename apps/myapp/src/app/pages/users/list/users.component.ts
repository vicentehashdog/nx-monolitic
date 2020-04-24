import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { UserInterface } from '@nex-test/data';

@Component({
  selector: 'nex-test-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public listOfData: UserInterface[] = [];

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) {
    this.usersServices.getAllUsers().subscribe(
      (data: UserInterface[]) => {
        this.listOfData = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

  addUser() {
    this.router.navigateByUrl('users/new');
  }

}
