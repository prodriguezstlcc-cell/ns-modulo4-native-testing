import { Component } from '@angular/core';
import { ImageSource } from '@nativescript/core';

@Component({
  selector: 'ns-camara',
  templateUrl: './camara.component.html'
})
export class CamaraComponent {
  fotoSrc: ImageSource | null = null;

  // Tomar foto con la cámara
  async tomarFoto() {
    const { Camera } = require('@nativescript/camera');
    await Camera.requestPermissions();
    const img = await Camera.takePicture({ saveToGallery: false });
    this.fotoSrc = img;
  }

  // Compartir imagen por social-share
  compartirFoto() {
    if (!this.fotoSrc) return;
    const { SocialShare } = require('@nativescript/social-share');
    SocialShare.shareImage(this.fotoSrc, 'Foto tomada con mi app');
  }
}
