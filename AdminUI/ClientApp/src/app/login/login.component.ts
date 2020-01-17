import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/services/Data/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public email: any;
    public password: any;
    public submitted: boolean = false;
    public error: any;
    public login1 = new Login();
    constructor(private authSvc: AuthService, private router: Router) { }
  ngOnInit() {
  }
    login(data) 
    {
      console.log(data);
        this.submitted = true;
        if (data.invalid)
            return true;
        this.authSvc.login(data).subscribe((isloggedIn:any) => 
             {
               console.log(isloggedIn)
                
                 if(isloggedIn!="")
                 {
                  this.router.navigate(['/']);    
                 } 
                 else  
                 {
                  this.error = 'Invalid user and password!';    
                 }
           }) 
     
    }
    
}





