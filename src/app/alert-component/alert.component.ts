import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent {
@Input() product;
@Output() notified = new EventEmitter();
notify() {
  this.notified.emit();
}
}
