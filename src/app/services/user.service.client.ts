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
    },{
      id: 124,
      title: "Gucci knockoff purse, pink",
      userName: "bhargavi",
      email: "bhargavi@husky.neu.edu",
      rate: 4,
      image: ["purse.jpg","purse3.jpg","purse2.jpg"],
      description: "Great condition, used for two months, 12\"wide by 10\"high, a trap drop from top middle to purse is about 8 inches, will fit on shoulder. Lots of compartments, any questions let me know.\n",
      wishlist: ["monitor","kindle","boots","lamp"]
    },{
      id: 125,
      title: "kensington keyboard",
      userName: "david",
      email: "david@husky.neu.edu",
      rate: 5,
      image: ["keyboard.jpg"],
      description: "barely used keyboard",
      wishlist: ["monitor","macbook"]
    },{
      id: 126,
      title: "Yamaha SY85 Music Workstation Synthesizer",
      userName: "david",
      email: "david@husky.neu.edu",
      rate: 5,
      image: ["keybrd.jpg","keybrd1.jpg","keybrd2.jpg"],
      description: "Yamaha SY85 Music Workstation Synthesizer - $240\n" +
      "\n" +
      "Yamaha MS60S Monitor Speaker available for a additional - $100 ( See 3rd and 4th pictures, please) \n" +
      "Used in good condition\n" +
      "\n" +
      "For details Stop by or call show contact info \n" +
      "Fast Cash Buy - Sell - Loan\n" +
      "50 State Street,\n" +
      "Lynn , MA 01901\n" +
      "Mon - Sat: 10am - 7pm",
      wishlist: ["drums","clock"]
    },{
      id: 127,
      title: "Canon Rebel 35mm SLR, 2 Lenses",
      userName: "patrick",
      email: "patrick@husky.neu.edu",
      rate: 3,
      image: ["cam1.jpg","cam2.jpg","cam3.jpg"],
      description: "Canon 35mm Film Camera, EOS body with 2 lenses, instructions, 2 rolls of film, strap, case and new batteries (uses CR2). Very good condition. One lens is 28-90 and the other is 75-300.\n" +
      "\n" +
      "Also includes two new roles of film, 24exp each (old but kept in the dark, FWIW) and new batteries.\n" +
      "\n" +
      "Please make an offer!",
      wishlist: ["drums","clock"]
    },{
      id: 128,
      title: "Mega Different Tom Drums",
      userName: "john",
      email: "john@husky.neu.edu",
      rate: 3,
      image: ["drums.jpg","drums1.jpg"],
      description: "*2* Black Used-13'' Tom Drums=20.00 each.\n" +
      "Email for pic's.\n" +
      "Like Brand New 12''and 13''Burswood-White Frost-Toms-$50.00 for both.\n" +
      "\n" +
      "Tama Rockstar- DX.-13''Wine Red Tom.=$40.00\n" +
      "Tama Rockstar, 13''White-Ivory.=$35.00\n" +
      "13''Wine Red Floor Tom-$20.00\n" +
      "Uni-lock-Pearl Tom Arm or Short Arm=$20.00. Each.Nice Cond.\n" +
      "Pearl Multiclamp-$17.00\n" +
      "*****Firm on all****\n" +
      "\n" +
      "4 Piece No Name.$90.00\n" +
      "email about it\n" +
      "Comes with a Cut ZBT cymbal and cymbal stand\n" +
      "**Free New Drum Key with any Purchase.\n" +
      "**Lots of Drum Gear .just ask.\n" +
      "Less then a min off 495.",
      wishlist: ["keyboard","desktop","iphone"]
    },
    {
      id: 129,
      title: "Women's winter ankle boots",
      userName: "Nancy",
      email: "nancy@husky.neu.edu",
      rate: 3,
      image: ["boots.jpg","boots1.jpg","boots2.jpg","boots3.jpg"],
      description: "New, unused winter ankle brown boots, size 39.",
      wishlist: ["bag","kindle","storage boxes"]
    },{
      id: 130,
      title: "Numismatist wants your coins!",
      userName: "Ron",
      email: "ron@husky.neu.edu",
      rate: 4,
      image: ["coins.jpg"],
      description: "Come get the most $ for your coins Pcgs,ngc,collectibles,buy,friendly,competitive,higher than everyone,coins,bullion,silver,",
      wishlist: ["shoes","kindle","storage boxes"]
    },{
      id: 131,
      title: "Plant hangers",
      userName: "Julie",
      email: "julie@husky.neu.edu",
      rate: 5,
      image: ["planthangers.jpg"],
      description: "All 3.. Hang on rought iron railing.",
      wishlist: ["pots","kindle","storage boxes"]
    },{
      id: 132,
      title: "Canon Scanner CanoScanLIDE",
      userName: "Anil",
      email: "anil@husky.neu.edu",
      rate: 5,
      image: ["scanner.jpg"],
      description: "Specifications\n" +
      "Main Unit Spec\n" +
      "Scanner Type\tFlatbed Color Image Scanner\n" +
      "Scanning Element\tContact Image Sensor (CIS)\n" +
      "Light Source\tThree-color (RGB) LEDs\n" +
      "Features\t4 EZ Buttons, Advanced Z-Lid, Auto Dust & Scratch Reduction, Auto Scan Mode, Convenient Filing Function (PDF Function), Gutter Shadow Correction, High Speed Scanning, Image Correction, Low Power Consumption (w/ 3-color LED), One Cable for Data & Power\n" +
      "Max. Resolutions\tOptical:2400 dpi x 4800 dpi1\n" +
      "Interpolated:19,200 x 19,200 dpi\n" +
      "Scanning Mode\tColor: 48-bit internal / 48- or 24-bit external\n" +
      "\n" +
      "Grayscale: 16-bit input / 8-bit external\n" +
      "Max. Document Size\t8.5\" x 11.7\"\n" +
      "Interface\tUSB 2.0 Hi-Speed\n" +
      "Dimensions (W x D x H)\t9.9\" (W) x 14.6\" (D) x 1.6\" (H)\n" +
      "Weight\t3.5 lbs.\n" +
      "OS Compatibility\tWindows Vista, Windows XP/2000 and Mac OSÂ® X v.10.3.9 - 10.5.x4\n" +
      "Software\tArcSoft® PhotoStudio®,MP Navigator EX, Solution Menu4\n" +
      "Power Source\tSupplied via USB port\n" +
      "Max. Power Consumption\t2.5W (1.4W Standby)",
      wishlist: ["iphone","macbook","airplane"]
    },{
      id: 133,
      title: "Samsonite hard shell luggage",
      userName: "shawn",
      email: "shawn@husky.neu.edu",
      rate: 5,
      image: ["luggage1.jpg","luggage2.jpg","luggage3.jpg"],
      description: "If it's still listed then it's still available.\n" +
      "\n" +
      "Size 21x29x9 - it's the size you would check-in\n" +
      "\n" +
      "Sturdy hard shell suitcase with (2) wheels. Make your next trip more enjoyable with this roomy rolling tank of a suitcase.",
      wishlist: ["chair","table","desktop"]
    },{
      id: 134,
      title: "100 count Extra Strong Premium 18 0z plastic cup",
      userName: "preethi",
      email: "preethi@husky.neu.edu",
      rate: 5,
      image: ["cups.jpg","cups2.jpg"],
      description: "Great for thanksgiving parties or for use during the upcoming xmas season We have 100 new not needed plastic cups.\n",
      wishlist: ["bulbs","plates"]
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
