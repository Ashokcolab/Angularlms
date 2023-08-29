import { Component,OnInit } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  larray:any[]=[];
  loginObj:any={
    uname:'',
    pwd:''
  };
  constructor(){
  }
  ngOnInit(): void {
      const localData=localStorage.getItem('signupUsers');
      if(localData!=null){
      this.larray=JSON.parse(localData);
  }
}
  Onlogin(){
    
    const isuserexist= this.larray.find(m=>m.userName==this.loginObj.uname && m.password==this.loginObj.pwd);
      if(isuserexist!=undefined){
        
        alert("user login successfully");
      }else{
        alert("invalid credentials");
      }
    }
  }

