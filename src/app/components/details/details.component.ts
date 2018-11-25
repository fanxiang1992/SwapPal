import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  show: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }



}
