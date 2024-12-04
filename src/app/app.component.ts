import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Card } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form: FormGroup<FormSearchView>
  title = 'proyect-of-cards';
  source: Card[] = [{
    title: "El catacentro",
    age: "2021",
    label: "Navidad",
    description: "Durante los inicios del servidor fuimos un grupo diverso que llego",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: "2021",
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  }]

  sourceToShow : Card[] = []

  constructor(private _fb:FormBuilder){
    this.form = new FormGroup({
      searchField: this._fb.control<string>(''),
    })
    this.sourceToShow = this.source;
  }

  search(){
    this.sourceToShow = this.source.filter(
      (data) => data.title.toLocaleLowerCase().includes(this.form?.value?.searchField?.toLocaleLowerCase() || ''))
  }
}

export interface FormSearch{
  searchField: string;

}

export interface FormSearchView{
  searchField: FormControl<string | null>
}
