import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit{
  public form: FormGroup

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data = {},
  ){}

  ngOnInit(): void {
    this.form = this._createForm()
  }

  send(){
    this.dialogRef.close(this.form.value);
  }

  private _createForm():FormGroup{
    return new FormGroup({
      title:      this._fb.control<string | null>(null, Validators.required),
      age:        this._fb.control<string | null>(null, Validators.required),
      label:      this._fb.control<string | null>(null, Validators.required),
      description:this._fb.control<string | null>(null, Validators.required),
      img:        this._fb.control<string>(''),
    })

  }
}
