import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent implements OnInit{
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


