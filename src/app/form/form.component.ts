import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lengthValidator } from './validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   empForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.empForm = this.fb.group({  
        name : ['',Validators.required],
        email : ['',Validators.required],
        passsword : [''],
        skills : this.fb.array([])
    })
  }


  get skills() {
    return this.empForm?.get('skills') as FormArray;
    // Avoid Modifying the getter return value it may break binding between getter and the form 
    // always better return the existing reference 
  }
  
  addSkill(){
     return this.skills.push(this.fb.control('',[Validators.required,lengthValidator(3)]))
     // here we have also dynamically set the validators 
  }

  removeSkill(index:any){
    return this.skills.removeAt(index);
    // we are removing the formControl dynamically 
  }
  onSubmit(){
    if(this.empForm.valid) {
      console.log("Form filled",this.empForm.value);
    }
  }
}
