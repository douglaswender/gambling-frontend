import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { IProfile } from '../profile';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  mySubscription: any;
  username = new FormControl('');
  password = new FormControl('');
  profile: IProfile;

  constructor(private _profileService: ProfileService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  login() {
    this._profileService
      .login(this.username.value, this.password.value)
      .subscribe((data) => {
        console.log('data from login')
        console.log(data);
        if (data.auth == true) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          this.router.navigate(['games']);
          this._profileService.setProfile(data.username);

        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
