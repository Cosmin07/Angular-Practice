import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() message!: { greeting: string, date?: Date };
  @Output() evenOddSeconds: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    if (this.message && this.message.date) {
      this.checkSeconds(this.message.date);
    }
  }

  checkSeconds(date: Date): void {
    if (date.getSeconds() %2 ===0) {
      this.evenOddSeconds.emit('Even second')
    }
    else {
      this.evenOddSeconds.emit('Odd second')
    }
  }
}

