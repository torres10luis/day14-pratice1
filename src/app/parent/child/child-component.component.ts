import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child-component',
  template: `
    <h2>
        {{childTitle}}
    </h2>
  <button type="button" (click)="notifyParent()" > click me!</button>

  `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() childTitle: string;
  title: 'im a test';
  @Output() notification = new EventEmitter<string>();



  constructor() { }

  ngOnInit() {
    console.log(this.childTitle, 'my child works');
  }
  notifyParent() {
    this.notification.emit('click from nested');
    console.log('event listener works');
  }


}
