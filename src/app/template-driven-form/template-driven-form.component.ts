import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
  providers:[CommonService]
})
export class TemplateDrivenFormComponent {
  public name ='';

  constructor(private commonService:CommonService) {
  }
  public submitForm(): void{
      this.commonService.submitData(this.name);
  }
}
