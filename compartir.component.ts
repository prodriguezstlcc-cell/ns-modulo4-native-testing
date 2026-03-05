import { Component } from '@angular/core';

@Component({
  selector: 'ns-compartir',
  templateUrl: './compartir.component.html'
})
export class CompartirComponent {
  texto: string = '¡Mira esta app increíble hecha con NativeScript!';

  // Compartir contenido de tipo texto
  compartirTexto() {
    const { SocialShare } = require('@nativescript/social-share');
    SocialShare.shareText(this.texto);
  }
}
