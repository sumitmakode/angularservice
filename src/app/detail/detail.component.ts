import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public emp = [];

  constructor(private _emp : ServicesService) { }

  ngOnInit() {

    // this._emp.getdatas();
    // .subscribe(data =>)
    this._emp.getdatas().subscribe(data => this.emp = data);
  }

}
