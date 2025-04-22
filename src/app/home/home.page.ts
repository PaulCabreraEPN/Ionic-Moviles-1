import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToast,
  IonCard,
  IonChip,
  IonButton,
  IonRadio,
  IonDatetime,
  IonRadioGroup,
  IonCheckbox, 
  IonPicker, 
  IonPickerColumn, 
  IonPickerColumnOption,
  IonToggle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonPicker, IonToggle, IonPickerColumn, IonPickerColumnOption, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonToast, IonCard, IonChip, IonButton, IonRadio, IonRadioGroup, IonCheckbox, IonDatetime],
})
export class HomePage {
  constructor() {}
}
