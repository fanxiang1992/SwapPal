import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';


// injecting service into module
@Injectable()

export class UserService {
  user: any = {name: ""};
  userId: any;

  public static anna = {
    id: 1,
    email: "anna@husky.neu.edu",
    numberOfRate: 1,
    avgRate: 4,
    pendingRate:false,
    name: "Anna",
    postList: [
      {
        id: 4,
        title: "Blender for Swap",
        swapperEmail: "",
        image: ["blender.jpg", "blender2.jpg", "blender3.jpg", "blender4.jpg", "blender5.jpg"],
        description: "I bought this blender last year. It has five program settings —Smoothies, Hot Soups, Dips & Spreads, Frozen Desserts and Self-Cleaning. It automatically adjust times and speeds for the container selected and stop the blender when done. You can find the specs of the blender here. https://www.amazon.com/Magic-Bullet-Blender-Small-Silver/dp/B012T634SM/ref=cm_cr_arp_d_product_top?ie=UTF8. The images are from Amazon. I used the blender 3-5 times ever since I bought it. It's practically almost new.",
        wishlist:["iphone", "airbed"]
      },
      {
        id: 5,
        title: "Iphone 5",
        swapperEmail: "",
        image: ["iphone5.jpg"],
        description: "Recently replaced battery for this phone, and just upgrade to iOS 12. Work like a charm.",
        wishlist:["bag"]
      }
    ],
    inTransactionPosts: [
      {
        id: 98,
        title: "EarPhone",
        image: ["earphone.jpeg"],
        swapper: "Jerry",
        description: "Like new condition",
        wishlist: ["sunglasses"]
      }
    ],
    historyPosts: [
      {
        id: 4,
        title: "HCI book",
        date: "10-16-2018",
        swapper: "Jack"
      },
      {
        id: 5,
        title: "Head phone",
        date: "9-24-2018",
        swapper: "Bobby"
      }
    ],
    wishlist: [
      {
        id: 5,
        title: "Chair",
      },
      {
        id: 6,
        title: "Table",
      },
      {
        id: 3,
        title: "Lamp",
      }
    ]
  };

  public static edward =  {
    id: 2,
    email: "ed@husky.neu.edu",
    numberOfRate: 1,
    avgRate: 3,
    pendingRate:false,
    name: "Edward",
    postList: [
      {
        id: 6,
        title: "Awesome Matress",
        swapperEmail: "",
        image: ["matress.jpg"],
        description: "It may not look good, but it's bed bug free. Better than what you will get from Allston Chrismas.",
        wishlist:["towerfan"]
      }
    ],
    inTransactionPosts: [],
    historyPosts: [],
    wishlist: []
  };

  postList = [
    {
      id: 1,
      title: "Google Pixel",
      userName: "Julian",
      email: "julian@husky.neu.edu",
      rate: 5,
      image: ["google-pixel.jpg", "google-pixel2.jpeg"],
      description: "Shows significant signs of use, heavy scratches on display and body. SIM card NOT included. Unlocked phones will work with most GSM SIM Cards, please check with your Carrier to ensure compatibility. You will receive the listed phone, and non-OEM compatible charger. Nothing else will be included unless specifically listed in our listing. Clean IMEI, 100% fully functional. Stock PHOTOS: You will receive the listed phone in the condition as described above.",
      wishlist:["desktop", "kindle"]
    },
    {
      id: 2,
      title: "Air Jordon 1",
      userName: "James",
      email: "james@husky.neu.edu",
      rate: 4,
      image: ["aj1.jpg"],
      description: "New with box: A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.",
      wishlist:["blender"]
    },
    {
      id: 3,
      title: "50 year's desk",
      userName: "Elsa",
      email: "elsa@husky.neu.edu",
      rate: 3,
      image: ["desk.png"],
      description: "As you can see, it's old, but functional. It will stand firm and do what a desk suppose to do.",
      wishlist: ["airbed"]
    },
    {
      id: 110,
      title: " Antique Large Mirror",
      userName: "Mary",
      email: "mary@husky.neu.edu",
      rate: 3,
      image: ["mirror.jpg"],
      description: "Mirror in very good condition - frame also in good condition, with slight nick on back corners. Very thick frame - mirror and frame very heavy. It is approx. 22\" x 27\". Can be hung horizontal or vertical. Downsizing, must sell - worth a lot more. ",
      wishlist: ["woodskis"]
    },
    {
      id: 111,
      title: " Pair of Wood Skis",
      userName: "Prashanth",
      email: "prashanth@husky.neu.edu",
      rate: 3,
      image: ["woodskis.jpg"],
      description: "Pair of old wood skis, they make wonderful decoration for ski lodge, cabin retreat ...",
      wishlist: ["iphone"]
    },
    {
      id: 112,
      title: "7 Drawer Cherry wood dresser",
      userName: "Emily",
      email: "emily@husky.neu.edu",
      rate: 5,
      image: ["drawer.jpg"],
      description: "This beautiful 7 drawer cherry wood lingerie dresser with brass draw handles complements\n" +
      "any decor and measures 62\" high x 19\" wide x 14.5\" deep. A rare find! I've loved it but must move.\n",
      wishlist: ["guitar"]
    },
    {
      id: 113,
      title: "Leaded glass panel lamp",
      userName: "Dave",
      email: "dave@husky.neu.edu",
      rate: 4,
      image: ["lamp1.jpg","lamp2.jpg"],
      description: "4 hand painted panels",
      wishlist: ["towerfan"]
    },{
      id: 114,
      title: "Folk Art Print",
      userName: "Cathy",
      email: "cathy@husky.neu.edu",
      rate: 3,
      image: ["art.jpg"],
      description: "Beautiful Folk Art Print with decorative frame 15\" x 16\"",
      wishlist: ["lamp"]
    },{
      id: 115,
      title: "DVDs",
      userName: "Tom",
      email: "tom@husky.neu.edu",
      rate: 2,
      image: ["cds.jpg"],
      description: "A set of DVDs movies,series,games etc",
      wishlist: ["books"]
    },
    {
      id: 116,
      title: "Crate & Barrel Aspen cups and saucers",
      userName: "Radha",
      email: "radha@husky.neu.edu",
      rate: 3,
      image: ["cutlery.jpg"],
      description: "Just in time for the holidays! Set of 8 cups and saucers from Crate and Barrel Apen dishes line.\n" +
      "\n" +
      "Barely used, great condition - no chips!BONUS Sur La Table cow creamer included!",
      wishlist: ["pressure cooker","lamp"]
    },{
      id: 117,
      title: "Gorgeous Vitrix Hot Glass Studio Vase",
      userName: "nick",
      email: "nick@husky.neu.edu",
      rate: 4,
      image: ["decor.jpg"],
      description: "A terrific Christmas gift!\n" +
      "\n" +
      "Founded in 1979 in Corning's Historic Market Street District, Vitrix Hot Glass Studio is regarded among America's most prominent contemporary glass studios.9½\" Tall Designer, contemporary, blown glass, unique",
      wishlist: ["curtains","bag","tent"]
    },{
      id: 118,
      title: "Lamp shade",
      userName: "veena",
      email: "veena@husky.neu.edu",
      rate: 3,
      image: ["shade1.jpg","shade2.jpg","shade3.jpg"],
      description: "Very good condition lamp shade. No dirt or tears. The exterior is made from cloth and it is cream color. It was from a glass lamp which I broke....Shade is very good quality.\n" +
      "\n" +
      "It's height is 9\" and diameter is 12\"",
      wishlist: ["towerfan","mirror","desk"]
    },{
      id: 119,
      title: "Philips coffee machine Espresso",
      userName: "sandeep",
      email: "sandeep@husky.neu.edu",
      rate: 4,
      image: ["coffee.jpg"],
      description: "Saeco HD8911/47 Incanto Classic Milk Frother Espresso Machine, Black\n" +
      "\n" +
      "Amazon sells for $800.\n" +
      "Save over $150 and buy it from me for $675, no tax.\n" +
      "\n" +
      "1) The espresso machine's ceramic grinders deliver premium espresso coffee from fresh beans for 20,000 cups guaranteed\n" +
      "2) Elegant design, best materials, and high quality workmanship\n" +
      "3) Classic milk frother allows you to control the milk froth directly into your cup, just like your barista\n" +
      "4) Easy maintenance and cleaning thanks to removable brewing unit and automatic cleansing and descaling procedures\n" +
      "5) Large capacities in compact design: 8.8oz Bean Container, 15x Waste Container; 60.9oz",
      wishlist: ["iphone","kindle","desk"]
    },{
      id: 120,
      title: "Bissell Featherweight vacuum",
      userName: "geetha",
      email: "geetha@husky.neu.edu",
      rate: 4,
      image: ["vaccum.jpg"],
      description: "Boswells featherweight vacuum that turned into a Dustbuster and has two attachments. Works fine. \n" +
      "\n" +
      "The duct tape pictured is what I put on to ensure it stays together. If you are not concerned about looks and like a vacuum that works well and is lightweight, this is for you.",
      wishlist: ["blender","mirror"]
    },{
      id: 121,
      title: "Plastic Storage boxes",
      userName: "abhi",
      email: "abhi@husky.neu.edu",
      rate: 4,
      image: ["storage.jpg"],
      description: "Three large plastic storage boxes; $6 each\n" +
      "Three smaller plastic storage boxes; $4 each\n" +
      "Great for storing Christmas decorations",
      wishlist: ["lamp","blender","mirror"]
    },{
      id: 122,
      title: "Philips smokeless indoor grill",
      userName: "kushi",
      email: "kushi@husky.neu.edu",
      rate: 3,
      image: ["grill.jpg","grill1.jpg","grill2.jpg","grill3.jpg"],
      description: "Philips Smoke-less Indoor Grill HD6371/94\n" +
      "Retails for between $280 at Amazon to $420 at Williams Sonoma.\n" +
      "Mine is brand new, never opened, never used, never taken out of the box.\n" +
      "SAVE $$ and buy your first Christmas 2018 gift of the season!\n" +
      "\n" +
      "Advanced infrared technology and special reflectors guide heat to the indoor grills cooking grid for delicious, evenly grilled food. The drip tray underneath remains cool so there is virtually no smoke.\n" +
      "No need to adjust the heat! The indoor grill quickly heats up to a consistent 446°F, the optimal temperature for cooking and searing your favorite meat, poultry and fish leaving it juicy and tender on the inside.\n" +
      "The electric grill ensures food is not cooked into its own grease and the fat is separated during grilling ; Voltage: 120 V\n" +
      "Clean up your electric grill in less than a minute! Either wipe the grid clean or place it in the dishwasher. Cleaning a grill has never been easier.\n" +
      "The indoor grill sets up in 1-minute - spend more time cooking and less on prep. Powerful 1660 Watts for cooking and non-slip feet to ensure your electric grill stays in place.\n",
      wishlist: ["cooker","storage","mirror"]
    },{
      id: 123,
      title: "Classic Balance ball Office Chair",
      userName: "abhi",
      email: "abhi@husky.neu.edu",
      rate: 4,
      image: ["balance.jpg"],
      description: "Classic Balance Ball Chair available. \n" +
      "\n" +
      "Ball if nicely inflated and is great for excercising your core and preventing back problems. \n" +
      "\n" +
      "Ball can be switched out for an even bigger ball if needed. Super comfortable and easy to use. Chair offers back support also and is on wheels. \n" +
      "\n" +
      "Link to product is here: \n" +
      "\n" +
      "https://www.gaiam.com/products/classic-balance-ball-chair?variant=32936592129&gclid=CjwKCAiA_c7UBRAjEiwApCZi8UM6snsQ91gR429IZWii7Otq1YmFYsmLlHOOuxfi7yu2h8thPvmaOhoCv_QQAvD_BwE\n",
      wishlist: ["lamp","blender","mirror"]
    }


  ];

  constructor(private _http: Http,
              private router: Router,
              public af:  AngularFireAuth,
              private db: AngularFireDatabase,
              private http: HttpClient) { }

              register(registerForm: any) {

    console.log(registerForm.value.username);
                  return this.af.auth.createUserWithEmailAndPassword(registerForm.value.username, registerForm.value.password)
                    .then((success) => {
                      const user: any = firebase.auth().currentUser;
                      this.userId = user.uid;
                      return success;
                    }).catch((error : any) => {
                      return null;
                    });
              }

              login( loginForm: any){
                  return this.af.auth.signInWithEmailAndPassword(loginForm.value.username, loginForm.value.password).then((success)=>{
                    return success;
                  }).catch((error) =>{
                    return null;
                  });
              }


              getPostList(){
                let totalList : any = this.postList.concat();
                UserService.anna.postList.forEach(function(post) {
                  post['userName'] = UserService.anna.name;
                  post['rate'] =  UserService.anna.avgRate;
                  post['email'] = UserService.anna.email;
                  totalList.push(post);
                })
                UserService.edward.postList.forEach(function(post) {
                  post['userName'] = UserService.edward.name;
                  post['rate'] =  UserService.edward.avgRate;
                  post['email'] = UserService.edward.email;
                  totalList.push(post);
                })
                if (this.user.name != UserService.anna.name && this.user.name != UserService.edward.name && this.user.postList) {
                  let name = this.user.name;
                  let rate = this.user.avgRate;
                  this.user.postList.forEach(function(post) {
                    post['userName'] = name;
                    post['rate'] = rate;
                    totalList.push(post);
                  })
                }
                return totalList;
              }
}
