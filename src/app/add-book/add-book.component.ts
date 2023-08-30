import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  onadd() {
    this.addusers.push({ bookname: this.addobj.bname }); 
    localStorage.setItem('addusers', JSON.stringify(this.addusers));
    location.reload();
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('addusers');
    if (localData !== null) {
      this.addusers = JSON.parse(localData);
    }
    // this.displayBookNames();
  }


}
