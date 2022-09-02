import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Home', icon: 'home' },
    { title: 'Estudiantes', url: '/folder/Estudiantes', icon: 'people' },
    { title: 'Calificaciones', url: '/folder/Calificaciones', icon: 'create' },
    { title: 'Asistencia', url: '/folder/Asistencia', icon: 'checkmark-done' },
    { title: 'Resguardar', url: '/folder/Resguardo', icon: 'cloud-download' },
    { title: 'Configuraciones', url: '/folder/Configuracion', icon: 'cog' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
