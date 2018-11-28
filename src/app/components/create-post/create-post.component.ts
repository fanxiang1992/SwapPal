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
  globalErrMsg: string;
  imageErrMsg: string;
  initialTag: string;
  firstTag: string;
  secondTag: string;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.isChecked = false;
    this.wishlistItems = ["iPhone", "desktop","blender", "bag", "towerfan", "Air-bed", "Alexa", "Watch" ,"MacBook", "shoes"];
    // this.newList.push('newItem');
    this.addMoreList.push('newItem');
    this.initialTag = 'What you want?';
    this.firstTag = 'What you want?';
    this.secondTag = 'Others wish-list';
  }

  captureUpload(event: any){
    const file: File = event.target.files[0];
    this.fileNameList.push(file.name);
    this.imageErrMsg = "";
    console.log(file.name);
    console.log(this.fileNameList);
  }

  // addItem(){
  //   this.newList.push('newItem');
  // }
  //
  // removeItem(j){
  //   this.newList.splice(j,1);
  // }

  addWishlistItem(){
    this.addMoreList.push('newItem');
  }

  removeWishlistItem(k){
    this.addMoreList.splice(k,1);
  }

  postInfo(createPostForm){
    if(this.fileNameList.length === 0){
      this.imageErrMsg = "Please add pictures of the item"
    }
    if(!createPostForm.valid){
      this.globalErrMsg = "Please enter the required fields";
    }
    if(this.fileNameList.length!== 0 && createPostForm.valid){
      this.router.navigate(['profile']);
    }
  }

  changeInitial(tagname){
    this.initialTag = tagname;

  }

}
