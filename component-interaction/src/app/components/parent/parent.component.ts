import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  messageToChild: { greeting: string, date?: Date } = { greeting: "Hello child" };
  messageFromChild: string = "";

  @ViewChild('myChild') myChild: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log(this.myChild)
  }

  ngAfterViewInit(): void {
    console.log(this.myChild)
  }

  sendMessage(): void {
    this.messageToChild = {greeting:"Hello child", date: new Date()};
  }
  onChildEvent(value: string): void {
    this.messageFromChild = value;
  }

}
