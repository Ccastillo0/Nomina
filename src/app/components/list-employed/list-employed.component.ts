import { Component } from '@angular/core';
import { Employed } from 'src/app/interfaces/Employed';

@Component({
  selector: 'app-list-employed',
  templateUrl: './list-employed.component.html',
  styleUrls: ['./list-employed.component.css']
})
export class ListEmployedComponent {
  listEmployed: Employed[] = [
    { ID: 1, ID_USER: 2, NIT_UNIQUE: 10310823, NAME: 'Cristopher', SALARY: 50000, EMAIL: 'ccastillo@gmail.com', DATECREATE: new Date()},
    { ID: 2, ID_USER: 4, NIT_UNIQUE: 85453557, NAME: 'Alexander', SALARY: 60000, EMAIL: 'ccastillo@gmail.com', DATECREATE: new Date()}
  ]
}
