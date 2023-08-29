import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    password:''
  };
  constructor(){}
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    location.reload();
  }
  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers');
    if(localData!=null){
    this.signupUsers=JSON.parse(localData);
}
      
  }
}
