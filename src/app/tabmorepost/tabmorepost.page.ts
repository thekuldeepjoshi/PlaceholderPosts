import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabmorepost',
  templateUrl: './tabmorepost.page.html',
  styleUrls: ['./tabmorepost.page.scss'],
})
export class TabmorepostPage implements OnInit {

    public  users : any;
    public  user : any;
    public  posts : any;
    url_posts = `https://jsonplaceholder.typicode.com/posts?userId=`;
    url_users = `https://jsonplaceholder.typicode.com/users`;

  constructor(private http: HttpClient) {
  this.GetUsers();
  }
  ngOnInit() {
  }
 GetUsers(){
      this.http.get(this.url_users).toPromise().then(data => {
                            if (data.hasOwnProperty(0)){
                              this.users = data;
                              for(this.user of this.users){

                              this.http.get(this.url_posts+this.user.id).toPromise().then(post => {
                                                              if (post.hasOwnProperty(0)){
                                                                this.posts = post;
                                                                }

                                                          });

                              }
                              }

                        });

    }

}
