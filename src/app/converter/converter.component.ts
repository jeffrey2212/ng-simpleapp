import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  convertedCode = ''

  constructor() { }

  ngOnInit() {
  }

  convert (newCode: string) {
    if (newCode) {
      this.convertedCode = newCode;

      this.convertedCode = this.convertedCode.replace(/\!/gi,'1')
      this.convertedCode = this.convertedCode.replace(/\@/gi,'2')
      this.convertedCode = this.convertedCode.replace(/\#/gi,'3')
      this.convertedCode = this.convertedCode.replace(/\$/gi,'4')
      this.convertedCode = this.convertedCode.replace(/\%/gi,'5')
      this.convertedCode = this.convertedCode.replace(/\^/gi,'6')
      this.convertedCode = this.convertedCode.replace(/\&/gi,'7')
      this.convertedCode = this.convertedCode.replace(/\*/gi,'8')
      this.convertedCode = this.convertedCode.replace(/\(/gi,'9')
      this.convertedCode = this.convertedCode.replace(/\)/gi,'0')
    }
  }

}
