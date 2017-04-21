import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';
import {RedComponentComponent} from '../red-component/red-component.component';

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent implements OnInit {
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {};
    this.gridOptions.columnDefs = [
            {
                headerName: 'ID',
                field: 'id',
                width: 100
            },
            {
                headerName: 'Value',
                field: 'value',
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ];
  }

  ngOnInit() {
  }

}
