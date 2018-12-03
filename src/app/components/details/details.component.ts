import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';

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
  id: number;
  post: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initialTag = 'What you want?';
    this.firstTag = 'What you want?';
    this.secondTag = 'Others wish-list';
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.post = this.userService.getPostList().find((item) => {
      return item['id'] == this.id;
    })
    console.log(this.post);
  }

  changeInitial(tagname){
    this.initialTag = tagname;

  }


}
