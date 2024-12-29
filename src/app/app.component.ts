import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Card } from './interfaces/card.interface';
import {MatDialog} from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

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
    age: 2021,
    label: "Navidad",
    description: "Durante los inicios del servidor fuimos un grupo diverso que llego",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  },
  {
    title: "Navidad",
    age: 2021,
    description: "Esta tradicion se hacia cada mes para balancear el destino del mundo y equilibrar el mundo",
    img: null
  }]

  sourceToShow : Card[] = []

  constructor(
    private _fb:FormBuilder,
    public dialog: MatDialog){
    this.form = new FormGroup({
      searchField: this._fb.control<string>(''),
    })
    this.sourceToShow = this.source;
  }

  addNewCard(obj: unknown){
    this.source.push(obj as Card);
  }

  search(){
    this.sourceToShow = this.source.filter(
      (data) => data.title.toLocaleLowerCase().includes(this.form?.value?.searchField?.toLocaleLowerCase() || ''))
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
        width: '30rem',
        autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.addNewCard(result);
      }
    });
  }

  exportData(){
    const sJson = JSON.stringify(this.source);
    const element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "data_cards.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}

export interface FormSearch{
  searchField: string;

}

export interface FormSearchView{
  searchField: FormControl<string | null>
}
