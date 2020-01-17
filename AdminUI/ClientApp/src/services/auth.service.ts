import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import {Login} from '../services/Data/login'
import {environment} from 'src/environments/environment'
// import {AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
// const poolData = {
//   UserPoolId: 'us-east-1_f5CYhm9Hw', // Your user pool id here
//   ClientId: '6ff0qksomf8oj5ff8ifj7733tn' // Your client id here  
// };
// const userPool = new CognitoUserPool(poolData);
@Injectable()
export class AuthService {
cognitoUser: any;
serviceRoot=environment.serviceRoot;
constructor(private router: Router, private http: HttpClient,)
{}
    get isLogedIn() {
        return parseInt(localStorage.getItem('isLoggedIn'));
    }
    login(Logindata: Login)  
    {
      let _content = JSON.stringify(Logindata);
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
    });  
      localStorage.setItem('isLoggedIn','1');
   return this.http.post(this.serviceRoot+'/api/Account/login',_content,{headers});    
    }
    logout() {
        localStorage.setItem('isLoggedIn','0')
        this.router.navigate(['/login']);
    }
}