import { AbstractControl, MinLengthValidator, ValidationErrors, ValidatorFn } from "@angular/forms";

export function lengthValidator(minLength:number):ValidatorFn {
   return (control:AbstractControl):ValidationErrors | null =>{
    if(!control.value) {
        return null;
    }
    return control.value.length < minLength ? {lengthObject : {lengthError : `Minimum ${minLength} required`}} : null; 
   }
}