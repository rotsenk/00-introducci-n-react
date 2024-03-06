# React nos permite usar estilos
- CSS
- Tailwind
- Materialize
- Sass

React no tiene ningún prejuicio, ni punto a favor con ninguno, se puede usar el que desees

## Comenzando con la forma más básica... 
Nos dirigimos a la carpeta de `/src` y los estilos que pongamos, queremos que toda la app los tome

- crear el archivo `.css`, en este caso "styles.css"
- después de dar los estilos, guardar cambios
```css
html,
body {
  background-color: #21232a;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 1.2rem;
  padding: 35px;
}
```
- importarla en el main.js `import './styles.css';`