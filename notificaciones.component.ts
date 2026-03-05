import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-notificaciones',
  templateUrl: './notificaciones.component.html'
})
export class NotificacionesComponent implements OnInit {
  token: string = 'Cargando token Firebase...';

  ngOnInit() {
    try {
      const { firebase } = require('@nativescript/firebase-core');
      const { messaging } = require('@nativescript/firebase-messaging');

      firebase().initializeApp();

      // Obtener token FCM
      messaging().getToken().then((t: string) => {
        this.token = t;
      });

      // Toast al recibir notificación
      messaging().onMessage(async (msg: any) => {
        const { Toastify } = require('@nativescript/toastify');
        Toastify.makeText(msg.notification?.body || 'Nueva notificación').show();
      });

    } catch (e) {
      this.token = 'Configura google-services.json con tus claves Firebase';
    }
  }
}
