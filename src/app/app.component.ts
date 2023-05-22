import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formattedNumber: string;
  formattedNumber2: string;
  formattedNumber3: string;
  constructor(private decimalPipe: DecimalPipe) {}

  ngOnInit(): void {
    const numberToFormat: number = 4.75352222;
    const numberToFormat2: number = 4.75352222;
    const numberToFormat3: number = 0.75352222;
    this.formattedNumber = this.decimalPipe.transform(numberToFormat, '1.0-0');
    this.formattedNumber2 = this.decimalPipe.transform(numberToFormat, '1.0-6');
    this.formattedNumber3 = this.decimalPipe.transform(numberToFormat, '3.0-6');
  }
}
