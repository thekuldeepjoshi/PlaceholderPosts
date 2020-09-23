import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicToastService } from '../services/ionic-toast.service';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url = `https://jsonplaceholder.typicode.com/users?email=`;
get email() {
    return this.LoginForm.get('email');
  }
  items = [];
   public errorMessages = {
    email: [
          { type: 'required', message: 'Email is required' },
          { type: 'pattern', message: 'Please enter a valid email address' }
        ],
};

LoginForm = this.formBuilder.group({
   email: [
         '',
         [
           Validators.required,
           Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
         ]
       ],
});

  constructor(private router:Router , private http: HttpClient, private ionicToastService: IonicToastService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }

  LoginCheck(){
  console.log(this.LoginForm.value.email);
    this.http.get(this.url+this.LoginForm.value.email).toPromise().then(data => {
    console.log(data);
                  if (data.hasOwnProperty(0)){
                  this.router.navigate(['/home']);
                    this.items['email']= data[0];
                    }
                   else{
                       this.ionicToastService.showToast();
                    }
              });
  }


}
