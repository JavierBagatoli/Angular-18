import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit{
  public form: FormGroup
  @Output() addNewCard = new EventEmitter()

  constructor(
    private _fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.form = this._createForm()
  }

  send(){
    this.addNewCard.emit(this.form.value)
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
