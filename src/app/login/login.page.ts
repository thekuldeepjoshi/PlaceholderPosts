import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicToastService } from '../services/ionic-toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url = `https://jsonplaceholder.typicode.com/users?email=`;
  items = [];

  constructor(private router:Router , private http: HttpClient, private ionicToastService: IonicToastService) {
  }

  ngOnInit() {
  }
showMyToast() {
    this.ionicToastService.showToast();
  }
  LoginCheck(){
 // console.log(this.email);
    this.http.get(this.url+this.email).toPromise().then(data => {
                  if (data.hasOwnProperty(0)){
                  this.router.navigate(['/home']);
                    this.items['email']= data[0];
                    }
                    else{
                        this.   showMyToast();
                        console.log('wrong email');
                    }
              });
  }

}
