import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  valOne: number;
  valTwo: number;

  constructor() { }

  ngOnInit() {

  }

  onChange(event: any, name: string) {
    const val = (<HTMLInputElement>event.target).value;
    switch (name.toUpperCase()) {
      case 'VALONE':
        this.valOne = Number(val);
        break;
      case 'VALTWO':
        this.valTwo = Number(val);
        break;
    }
  }

  isValid(val: number) {
    return isNaN(val);
  }

}
