import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  wishlistItems: any[];
  isChecked: boolean;
  newList: string[] =[];
  addMoreList: string[] =[];
  fileNameList: string[] = [];
  displayMsg: boolean;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.isChecked = false;
    this.wishlistItems = ["iPhone", "desktop","blender", "bag", "towerfan", "Air-bed", "Alexa", "Watch" ,"MacBook", "shoes"];
    this.newList.push('newItem');
    this.addMoreList.push('newItem');
  }

  captureUpload(event: any){
    const file: File = event.target.files[0];
    this.fileNameList.push(file.name);
    console.log(file.name);
    console.log(this.fileNameList);
  }

  addItem(){
    this.newList.push('newItem');
  }

  removeItem(j){
    this.newList.splice(j,1);
  }

  addWishlistItem(){
    this.addMoreList.push('newItem');
  }

  removeWishlistItem(k){
    this.addMoreList.splice(k,1);
  }

  postInfo(){
    this.displayMsg = true;
     setTimeout(() => this.router.navigate(['post-list']), 5000);
  }
}
