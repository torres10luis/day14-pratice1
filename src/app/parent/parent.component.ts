import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  // tslint:disable-next-line:component-selector
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styles: [''],
})

export class ParentComponent {
child = 'text passed to child';
// tslint:disable-next-line:member-ordering
onNotify(message: string): void {
  alert(message);
}

}

