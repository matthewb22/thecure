import {Component} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';

@Component({
	selector : 'login-cmp',
	templateUrl : './pages/login/components/login.html',
	directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {

	constructor(public router: Router, public http: Http) {
  	}

  login() {
	let username = 'matt';
	let password = 'b';
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:48080/bmsapi/authenticate', body)
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['/home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }


}
