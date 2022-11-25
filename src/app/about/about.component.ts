import { Component, Inject } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[CommonService],
})
export class AboutComponent {
  public loginName="admin";
  public myColor = "red";
  public counter =0;
  constructor (private service: CommonService ){
    this.counter = this.service.binhPhuong(5);
  }
}
