import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.scss']
})
export class SiblingOneComponent implements OnInit {

  message: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
  changeMessage():void  {
    this.dataService.changeMessage('Hello from sibling 1');
  }
}
