import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  show: boolean = true;
  initialTag: string;
  firstTag: string;
  secondTag: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initialTag = 'What you want?';
    this.firstTag = 'What you want?';
    this.secondTag = 'Others wish-list';
  }

  changeInitial(tagname){
    this.initialTag = tagname;

  }


}
