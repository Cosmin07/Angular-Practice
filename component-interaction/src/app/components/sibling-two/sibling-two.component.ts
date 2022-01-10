import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.scss']
})
export class SiblingTwoComponent implements OnInit {

  message: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  changeMessage():void  {
    this.dataService.changeMessage('Hello from sibling 2');
  }
}
