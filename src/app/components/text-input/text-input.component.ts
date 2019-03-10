import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() value: string;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  public updateValue() {
    this.onUpdate.emit(this.value);
  }

}
