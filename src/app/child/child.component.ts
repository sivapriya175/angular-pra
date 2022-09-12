import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name:string;
  names:String;
  getValue(value:any)
  {
    this.name=value;
  }
  getLower(value:any)
  {
    this.names=value;
  }
  constructor() { }

  ngOnInit(): void {
    this.getValue(this.name);
    this.getLower(this.names);
  }

}
