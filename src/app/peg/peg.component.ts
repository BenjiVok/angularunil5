import { Component, OnInit, Input } from '@angular/core';
import { PegColor } from 'src/models/peg-color';
import { PegType } from 'src/models/peg-type';

@Component({
  selector: 'mm-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.scss']
})
export class PegComponent implements OnInit {

  @Input()
  color: PegColor;
  
  @Input()
  type: PegType;

  get colorChar(){
    return (this.color ?? "X")[0].toUpperCase();
  }

  get colorLower(){
    return (this.color ?? "X")[0].toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
