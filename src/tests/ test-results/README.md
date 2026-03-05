# Módulo 4 — Capacidades Nativas y Testing

Proyecto NativeScript Angular — Módulo 4.

## Requisitos implementados

1. Token Firebase FCM visible en pantalla notificaciones
2. Toast que muestra notificaciones entrantes
3. Social Share para compartir texto
4. Social Share para compartir imagen de cámara
5. Plugin camera para tomar fotografías
6. Imagen de cámara compartida por social-share
7. Google Maps configurado con cuenta propia
8. Marker en el mapa (Tegucigalpa, Honduras)
9. Suite de tests Jasmine para reducer Redux (4 tests)
10. Karma JUnit Reporter configurado — genera test-results.xml

## Estructura
```
src/
├── app/
│   └── features/
│       ├── notificaciones/
│       ├── camara/
│       ├── compartir/
│       └── mapa/
└── tests/
    └── leer-ahora.reducer.spec.ts
```

## ⚠️ Configuración requerida
- Reemplaza `App_Resources/Android/google-services.json` con tus claves Firebase
- Reemplaza la API Key de Google Maps con la tuya propia

## Correr tests
```
npm test
```
El reporte se genera en: `test-results/test-results.xml`
