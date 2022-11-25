import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [CommonService],
})
export class ReactiveFormComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
  });
  constructor(private service: CommonService, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  submitData(): void {
    this.service.submitData(this.profileForm.value);
  }
}
