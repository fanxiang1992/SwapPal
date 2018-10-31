import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  captureUpload(event: any){
    const file: File = event.target.files[0];
  }

}
