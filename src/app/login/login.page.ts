import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicToastService } from '../services/ionic-toast.service';
import { FormBuilder, Validators } from "@angular/forms";
import { DataService } from '../services/data.service';


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

  constructor(private router:Router , private http: HttpClient, private ionicToastService: IonicToastService, private formBuilder: FormBuilder, private dataService: DataService) {
  }

  ngOnInit() {
  }

  LoginCheck(){
    this.http.get(this.url+this.LoginForm.value.email).toPromise().then(data => {

                  if (data.hasOwnProperty(0)){
                   let navigationExtras: NavigationExtras = {
                        state: {
                          user: data[0]
                        }
                      };
                  this.router.navigate(['/home'],navigationExtras);
                    }
                   else{
                       this.ionicToastService.showToast();
                    }
              });
  }


}
