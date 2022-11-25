import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent {
  constructor(private httpService: HttpServerService) { }
  public getData() {
    this.httpService.getPosts().subscribe((data) => {
      console.log(data);
    });
  }
}
