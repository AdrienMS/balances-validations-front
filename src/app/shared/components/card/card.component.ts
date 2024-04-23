import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Output() action = new EventEmitter<void>();

  public onAction() {
    this.action.emit();
  }
}
