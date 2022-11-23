import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name = "Thắng";
  public traiCay = [{
    name: 'Táo',
    price: 10000,
    discount: true,
  }, {
    name: 'Nho',
    price: 20000,
    discount: true,
  }, {
    name: 'Cam',
    price: -15000.15,
    discount: false,
  }];

  public cities = [{
    city:"Tỉnh/Thành phố",
    district:["Quận/Huyện"],
  },{
    city: 'Hà Nội',
    district: ['Hoàng Mai', 'Hà Đông', 'Tây Hồ', 'Ba Đình']
  }, {
    city: 'Hồ Chí Minh',
    district: ['Quận 1', 'Quận 2', 'Quận 3', 'Tân Bình', 'Bình Chánh']
  }];
  public districts: any;
  public default = true;

  public resetName() {
    console.log("Trái cây: " + this.traiCay);
  }

  public changeCity(event: any) {
    this.districts = this.cities.find(city => city.city === event.target.value)?.district;
    if(this.districts != null) {
      this.default = false;
    }
  }
}
