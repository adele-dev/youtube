import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() sendValueInput: EventEmitter<string> = new EventEmitter();

  valueInputSearched: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  sendSearchedValue():void{
    this.sendValueInput.emit(this.valueInputSearched);
  }

}
