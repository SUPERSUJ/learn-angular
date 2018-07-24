import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(['']),
    ])
  });

  orderForm: FormGroup;
  items: any = [];

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      constomerName: '',
      email: '',
      items: this.fb.array([this.createItem()]),
    });
  }

  createItem() {
    return this.fb.group({
      name: '',
      description: '',
      price: '',
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  print() {
    console.log('this.orderForm: ', this.orderForm);
    console.log('this.orderForm.value: ', this.orderForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(['']));
  }

  onSubmit() {
    console.log('this.profileForm: ', this.profileForm.value);
  }

}
