# Bitácora del proyecto: De la Web al Móvil

**Aprendiz:** Jerson Santiago Hernández Cortes  
**Programa:** Análisis y Desarrollo de Software  
**Código:** 228118  
**Proyecto formativo:** Desarrollo de software para el control de procesos orientados a microservicios  
**Instructor:** [Completar]  
**Centro de formación:** [Completar]  
**Fecha:** Bogotá, 2026

## Introducción
En esta actividad desarrollé una aplicación sencilla para comprender cómo cambia la construcción de una interfaz cuando se trabaja para navegador y cuando se trabaja para dispositivos móviles. La idea fue crear el mismo contador de likes en dos tecnologías y observar cómo responde cada una a las acciones de la persona que la utiliza.

## Objetivo general
Construir una aplicación de contador de likes en versión web y móvil, aplicando manipulación del DOM con JavaScript y componentes con estado en React Native.

## Herramientas
- Visual Studio Code para editar los archivos.
- HTML para organizar el contenido de la página.
- CSS para definir colores, espacios y presentación.
- JavaScript para manejar los eventos y actualizar la interfaz web.
- React Native para construir la interfaz móvil.
- Expo para ejecutar y probar la aplicación móvil.
- Git y GitHub para llevar el control de versiones.

## Parte 1. Aplicación web
1. Organicé una carpeta llamada `web` para mantener separados los archivos de la versión web.
2. Creé `index.html` y definí la estructura: título, descripción, contador, botones e historial.
3. Creé `styles.css` para dar formato a la tarjeta, el contador, los botones y la tabla.
4. Creé `app.js` y seleccioné los elementos HTML con `getElementById`.
5. Definí la variable `likes` para guardar el número actual.
6. Agregué `addEventListener("click", ...)` para detectar las pulsaciones.
7. En cada acción actualicé el contador y registré la hora con el objeto `Date`.
8. Construí las filas de la tabla con `createElement` y las inserté al inicio con `prepend`.
9. Añadí las opciones de restar y reiniciar, evitando que el contador quede por debajo de cero.
10. Programé un cambio de color cuando el contador supera 10.

**Pruebas que debo realizar:** abrir `web/index.html`, presionar varias veces “Me gusta”, verificar que el número aumente, revisar que el historial muestre acción y hora, probar restar y reiniciar y superar los 10 likes para comprobar el cambio de color.

## Parte 2. Aplicación móvil con React Native y Expo
1. Preparé la carpeta `movil` para la versión móvil.
2. Definí la configuración del proyecto en `package.json` y `app.json`.
3. Construí la pantalla en `App.tsx` usando componentes nativos como `SafeAreaView`, `View`, `Text`, `ScrollView` y `TouchableOpacity`.
4. Utilicé `useState` para almacenar el contador y la lista de registros.
5. Programé las funciones para sumar, restar y reiniciar.
6. En cada interacción guardé la acción, el nuevo valor y la hora.
7. Apliqué estilos con `StyleSheet.create`.
8. Preparé la ejecución mediante Expo: instalar dependencias, iniciar el servidor y escanear el QR con Expo Go.

**Comandos de ejecución:**
```bash
cd movil
npm install
npx expo start
```

**Pruebas que debo realizar:** abrir la aplicación en Expo Go, probar los tres botones, verificar las horas del historial y confirmar el cambio de color al superar 10 likes.

## Cuadro comparativo
| Concepto | Desarrollo web | React Native |
|---|---|---|
| Estructura visual | HTML: `h1`, `div`, `button`, `table` | Componentes: `Text`, `View`, `TouchableOpacity` |
| Interacción | Eventos con `addEventListener` | Propiedad `onPress` |
| Actualización | Manipulación directa del DOM | Estado con `useState` y renderizado |
| Estilos | Reglas CSS | Objetos con `StyleSheet.create` |
| Ejecución | Navegador web | Aplicación móvil mediante Expo |
| Tabla/historial | Elementos `table`, `tr`, `td` | Vistas y textos organizados en filas |

## Dificultades y soluciones
Durante el desarrollo pueden presentarse dificultades al enlazar los archivos, seleccionar correctamente los elementos del DOM o ejecutar Expo. Para solucionarlas conviene revisar las rutas, los identificadores usados en HTML y JavaScript, instalar las dependencias desde la carpeta correcta y verificar que el celular y el computador puedan comunicarse por la red.

## Conclusiones
Con esta actividad comprendí que una misma idea puede construirse en plataformas distintas, pero cada tecnología tiene su propia forma de representar la interfaz y responder a las interacciones. En la web utilicé el DOM para actualizar elementos HTML directamente. En la aplicación móvil utilicé componentes de React Native y el estado de React para reflejar los cambios. También practiqué la organización del código y el control de versiones.

## Evidencias pendientes de anexar
- [ ] Captura de la aplicación web al iniciar.
- [ ] Captura de la tabla web con varios registros.
- [ ] Captura de la web con más de 10 likes.
- [ ] Captura de la aplicación móvil en Expo Go.
- [ ] Captura del historial móvil.
- [ ] Captura del repositorio y sus commits reales.

## Repositorio
https://github.com/toquicaromel701jcm-dot/DOM-y-React-native

**Nota:** esta bitácora es una base de trabajo. Ajusta los pasos a lo que realmente ejecutes, completa instructor y centro, y agrega capturas auténticas antes de entregar.
