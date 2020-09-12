import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnChanges {
  @Input('setCount') setCount;
  value: number;

  constructor() { }

  ngOnChanges() {
    if (this.setCount) {
      this.value = this.setCount.dataLength * 10;
    }
  }

}
