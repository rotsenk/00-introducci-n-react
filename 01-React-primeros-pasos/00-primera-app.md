## Nuestra primera aplicación - Hola Mundo
> Esta la realizaremos con VITE, porque vite, tiende a ser una experiencia de desarrollo más amigable que CRA.

- Escribimos el comando: npm create vite
- Se coloca el nombre de nuestra app, en este caso "counter-app"
- Elegir React > JavaScript
- Entrar a la carpeta con el comando: cd counter-app
- Instalar dependencias: npm install
- Correr la aplicación: npm run dev

# Arquitectura de Archivos en una Aplicación Básica de React con Vite

En una aplicación básica de React utilizando Vite como herramienta de construcción, la arquitectura de los archivos generalmente sigue una estructura estándar, aunque puede variar según las preferencias del desarrollador y las necesidades del proyecto. A continuación, se presenta una explicación básica de la arquitectura típica de archivos para una aplicación React con Vite:

## Directorio raíz (`/`)

- **`vite.config.js`**: Este archivo contiene la configuración de Vite, donde puedes especificar opciones de construcción, plugins, ajustes de desarrollo, entre otros.
- **`package.json`**: Este archivo es parte de la configuración de Node.js y generalmente contiene información sobre las dependencias del proyecto, scripts de construcción y comandos de ejecución, entre otros.
- **`index.html`**: Este archivo HTML es el punto de entrada de la aplicación. Es aquí donde se monta la aplicación React en el DOM y donde puedes incluir otros recursos como estilos o scripts.

## Directorio `/src`
- **`index.jsx` (o `App.jsx`)**: Este es el archivo principal de la aplicación React. Aquí es donde se define el componente principal de la aplicación y se renderiza en el DOM.
- **Otros archivos JSX**: Además del archivo principal, es común tener otros archivos JSX que contienen componentes React individuales. Estos pueden organizarse en subdirectorios según la estructura de la aplicación.
- **Archivos de estilos (CSS, SCSS, etc.)**: Si la aplicación utiliza estilos, estos archivos suelen ubicarse en este directorio. Vite es compatible con una variedad de preprocesadores de CSS, por lo que puedes elegir el que prefieras (CSS puro, SCSS, Less, etc.).
- **Archivos de imágenes y otros recursos**: Si tu aplicación utiliza imágenes u otros recursos estáticos, estos archivos suelen estar ubicados en este directorio.

## Directorio `/public`

- **Recursos estáticos**: Este directorio contiene recursos estáticos que se copian directamente al directorio de salida (`/dist`) durante el proceso de construcción. Por ejemplo, aquí podrías colocar archivos como un favicon, archivos de robots.txt o cualquier otro recurso que necesites servir directamente desde el servidor sin procesamiento previo.

En resumen, la arquitectura de archivos de una aplicación básica de React con Vite sigue una estructura similar a la de una aplicación React estándar, con la adición de archivos de configuración específicos de Vite y el uso del directorio `/public` para recursos estáticos. Esta estructura proporciona una organización clara de los archivos y facilita el desarrollo y mantenimiento de la aplicación.

Directorio `/dist` en una Aplicación React con Vite

El directorio `/dist` es donde Vite guarda los archivos generados durante el proceso de construcción de una aplicación React. Después de que Vite procesa y optimiza los archivos de la aplicación, como los archivos JavaScript, CSS y otros recursos estáticos, los guarda en el directorio `/dist` para que estén listos para ser desplegados en producción.

Cuando ejecutas el comando de construcción (`vite build`), Vite toma los archivos fuente de tu aplicación, los procesa según las configuraciones especificadas en `vite.config.js`, como la optimización de código, la minificación, etc., y luego guarda los archivos resultantes en el directorio `/dist`. Este directorio es el que deberías desplegar en tu servidor de producción.

En resumen, el directorio `/dist` es el resultado final del proceso de construcción de tu aplicación React con Vite. Contiene los archivos optimizados y listos para producción que se pueden desplegar en un servidor web para que la aplicación sea accesible en línea.

