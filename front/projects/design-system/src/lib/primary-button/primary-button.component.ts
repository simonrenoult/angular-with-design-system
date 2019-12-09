import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nexsis-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {

  @Input() text = 'Valider';
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  btnClicked() {
    this.clicked.emit();
  }
}
