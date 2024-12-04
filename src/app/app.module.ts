import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { InputComponent } from './generic/input/input.component';
import { BackgroundComponent } from './generic/background/background.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TextareaComponent } from './generic/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    BackgroundComponent,
    CardComponent,
    FormComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    TextFieldModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
