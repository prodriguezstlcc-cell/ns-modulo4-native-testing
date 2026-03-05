import { Component } from '@angular/core';

@Component({
  selector: 'ns-mapa',
  templateUrl: './mapa.component.html'
})
export class MapaComponent {

  // Se ejecuta cuando el mapa está listo
  onMapReady(args: any) {
    const map = args.map;

    // Agregar marker en Tegucigalpa, Honduras
    map.addMarker({
      lat: 14.0818,
      lng: -87.2068,
      title: 'Mi Ubicación',
      snippet: 'Tegucigalpa, Honduras'
    });
  }
}
