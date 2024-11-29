import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{
    @Input() size: string = 'size-0'
    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() label: string;
    @Input() type: string = 'text';
    @Input() required: boolean | undefined = false;

    ngOnInit(): void {
        this.required = this.form.get(this.controlName)?.hasValidator(Validators.required)
    }
}


