import { Component, Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnChanges {
  @Input('dataSource') dataSource;
  displayedColumns = ['name', 'birthday', 'lang', 'gender', 'about'];

  ngOnChanges() {
  }

}
