import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-add-patron',
  templateUrl: './add-patron.component.html',
  styleUrls: ['./add-patron.component.css']
})
export class AddPatronComponent implements OnInit {
  addpat: any[] = [];
  patobj: any = {
    pname: '',
    id:''
  };
  onadd() {
    this.addpat.push({ patname: this.patobj.pname}); 
    localStorage.setItem('addpat', JSON.stringify(this.addpat));
    location.reload();
    alert("added patron successfully go back");
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('addpat');
    if (localData !== null) {
      this.addpat = JSON.parse(localData);
    }
    console.log("addpat",this.addpat);
  }

}
