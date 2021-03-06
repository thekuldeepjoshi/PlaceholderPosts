import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabuserpost',
  templateUrl: './tabuserpost.page.html',
  styleUrls: ['./tabuserpost.page.scss'],
})
export class TabuserpostPage implements OnInit {
    data: any;
   public  posts : any;
    url = `https://jsonplaceholder.typicode.com/posts?userId=`;
 constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user; // get data from router eg email
        this.GetData(this.data.id); // call to GetData function using url with id provided by user.
      }
    });

  }

  ngOnInit() { }

   GetData(email){
      this.http.get(this.url+email).toPromise().then(data => {
                            if (data.hasOwnProperty(0)){
                              this.posts= data; // post data into posts varibale to access from page.html file
                              }

                        });

    }

}
