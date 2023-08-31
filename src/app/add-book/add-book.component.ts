import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addusers: any[] = [];
  addobj: any = {
    bname: ''
  };

  constructor(private route:Router) { }

  onadd() {
    this.addusers.push({ bookname: this.addobj.bname }); 
    localStorage.setItem('addusers', JSON.stringify(this.addusers));
    alert("Added book successfully go back")
    location.reload();
    // this.route.navigate(['/navpage']);
    
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('addusers');
    if (localData !== null) {
      this.addusers = JSON.parse(localData);
    }
    // this.displayBookNames();
  }


}
