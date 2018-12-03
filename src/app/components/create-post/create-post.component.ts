import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {AngularFireDatabase} from "angularfire2/database";
import * as firebase from 'firebase/app';

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
  imageFile: File;
  postList = [];
  location: boolean;
  imageFiles: File [] = [];
  imageCounter: number;
  wishlist: any[];
  selectedWishlist : string[] = [];
  yourPostList: any[] = [];

  constructor(private router: Router,
              private userService: UserService, private db: AngularFireDatabase) {
    this.yourPostList = this.userService.user.postList || [];
    this.wishlist = this.userService.user.wishlist || [];
  }

  ngOnInit() {
    this.isChecked = false;
    this.postList = this.userService.getPostList();
    console.log('this is the wishlist',this.wishlist);
    // this.newList.push('newItem');
    this.addMoreList.push('newItem');
    this.initialTag = 'What you want?';
    this.firstTag = 'What you want?';
    this.secondTag = 'Others wish-list';
    this.location = true;
    this.imageCounter = 0;
  }

  captureUpload(event: any){
    const file: File = event.target.files[0];
    this.fileNameList.push(file.name);
    //file.name = file.name.replace(/\s/g, "_");
    this.imageFiles.push(file);
    this.imageErrMsg = "";
    this.imageFile = file;
  }

  locationChange(flag){
    console.log("flag",flag);
    this.location = flag;
  }

  addWishlistItem(){
    this.addMoreList.push('newItem');
  }

  removeWishlistItem(k){
    this.addMoreList.splice(k,1);
  }

  postInfo(createPostForm){


    var x = document.getElementsByClassName('wishlistCheckBoxs') as HTMLCollectionOf<HTMLElement>;
    for(var i = 0;i<x.length;i++){
      if((x[i] as HTMLInputElement).checked){
        this.selectedWishlist.push(this.wishlist[i].title);
      }
    }

    for (i = 0; i < this.addMoreList.length; i++) {
      var item = document.getElementById('newWishlistItem'+i) as HTMLInputElement;
      if (item.value) {
        this.selectedWishlist.push(item.value);
      }
    }
    console.log(this.selectedWishlist);

    if(this.fileNameList.length === 0){
      this.imageErrMsg = "Please add pictures of the item"
    }
    if(!createPostForm.valid){
      this.globalErrMsg = "Please enter the required fields";
    }
    if(this.fileNameList.length!== 0 && createPostForm.valid){
      let imageUrl = [];
      console.log('createPostForm values----',createPostForm.value.title, createPostForm.value.description, createPostForm.value.location);
      this.imageFiles.forEach(function (image) {
        let imageName = image.name.replace(/\s/g, "_");
        const storageRef: firebase.storage.Reference = firebase.storage().ref('/images/' + imageName);
        storageRef.put(image).then(function (img) {
          const storageRef1: firebase.storage.Reference = firebase.storage().ref('/images/');

          var imgRef = storageRef1.child(imageName);
          imgRef.getDownloadURL().then(function (url) {
            imageUrl.push(url);
          });
        });

      });



      //
      // this.imageFiles.forEach(function (image) {
      //   let imageName = image.name.replace(/\s/g, "_");
      //
      // });

      console.log(imageUrl);

      var newPost = {
        id: this.userService.getPostList().length + 1,
        title: createPostForm.value.title,
        description: createPostForm.value.description,
        location: (this.location ? 'On-Campus' : 'Off-Campus'),
        userName: this.userService.user.name,
        rate: this.userService.user.avgRate,
        postedFrom: "CreatePost",
        image: imageUrl,
        wishlist: this.selectedWishlist
      }

      //this.postList.push(newPost);
      console.log('your posts', this.yourPostList);
      console.log(newPost);
      if (!this.userService.user.postList) {
        this.userService.user.postList = [];
      }
      this.userService.user.postList.push(newPost);
      this.router.navigate(['profile']);
    }
  }

  changeInitial(tagname){
    this.initialTag = tagname;
  }

  // addItem(){
  //   this.newList.push('newItem');
  // }
  //
  // removeItem(j){
  //   this.newList.splice(j,1);
  // }

}
