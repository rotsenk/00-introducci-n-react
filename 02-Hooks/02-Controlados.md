# Formularios Controlados

- Los componentes React que rendericen un formulario también controlan lo que pasa en ese formulario con las subsecuentes entradas del usuario.
- Ahora vamos a poder detectar los campos input en tiempo real.

Para iniciar con los formularios controlados, partiremos de la siguiente estructura

```js

const Controlado = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="pendiente">Pendiente</option> 
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default Controlado;
```

> Para trabajar con formularios controlados, lo primero es hacer estados por cada uno de nuestros campos

Tendríamos el código así:
```js
import { useState } from 'react';

const Controlado = () => {
  const [title, setTitle] = useState('');//inicializar cada campo en un string vacío
  const [description, setDescription] = useState('');
  const [state, setState] = useState('pendiente');//inicializar con pendiente
  //ahora que ya tenemos inicializados nuestros campos con un state distinto
  //tenemos que hacer la asociación
  //y para hacerlo utiliza el famoso value={}
  //al value ahora nosotros le indicamos cada uno del estado correspondiente
  //la gracia del value, es que cada que yo empiece a escribir, se relacione con el setter
  //que hace que se modifique nuestro estado, usando el onChange, a traves del target capturamos el input
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //podríamos visualizar el setter, (e) => console.log(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese la descripción"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select className="form-select mb-2" name="state" value={state} onChange={(e) => setState(e.target.value)}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
```
> Visualicemos en el navegador el componente con la extensión de reac dev tools, podemos ver los estados de cada hook, si escribimos en los campos, aparece la info en tiempo real

Anteriormente nosotros colocamos los valores de forma predeterminada, en los controlados, es tan facil, como colocarlos en cada useState, esto lo podemos hacer como práctica, nada más, no en la vida real
```js
import { useState } from 'react';

const Controlado = () => {
  const [title, setTitle] = useState('Tarea 1');
  const [description, setDescription] = useState('Descripción 1');
  const [state, setState] = useState('pendiente');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese la descripción"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select className="form-select mb-2" name="state" value={state} onChange={(e) => setState(e.target.value)}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
```

## Cómo evitar usar tantos useState 
Aquí también veremos como usar los useState con datos no primitivos, ya sea un objeto o un array

¿se imaginan que tengan un formulario con 50 inputs? sería muy tedioso usar tantos states

> con esto `setTarea({...tarea, title: e.target.value})` le decimos que nos haga una copia y que mantenga el estado actual porque necesito la copia por si después el usuario coloca algo en el textarea

```js
import { useState } from 'react';

const Controlado = () => {
  const [tarea, setTarea] = useState({
    title: 'tarea 1',
    description: 'descripción 1',
    state: 'pendiente'
  });
  //ya tenemos un objeto como dato inicial del useState, que es diferente a todo lo que hemos trabajado
  //para poder usar ese objeto tenemos que hacer varias modificaciones...
  //1. usar setTarea, en lugar de setTitle, setDesc, etc...
  //pero se complica porque setTarea ahora es un objeto

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={tarea.title}
        onChange={(e) => setTarea({...tarea, title: e.target.value})}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese la descripción"
        name="description"
        value={tarea.description}
        onChange={(e) => setTarea({...tarea, description: e.target.value})}
      />
      <select className="form-select mb-2" name="state" value={tarea.state} onChange={(e) => setTarea({...tarea, state: e.target.value})}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;

```

## Optimizando el onChange
Como podemos ver la lógica de los onChange, es la misma en todas

```js
import { useState } from 'react';

const Controlado = () => {
  const [tarea, setTarea] = useState({
    title: 'tarea 1',
    description: 'descripción 1',
    state: 'pendiente'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tarea.title);
  };

  const handleChange = (e) => {
    //cada vez que el usuario interactúa con el input, se captura el valor que escribió
    console.log(e.target.value);
    //y el campo de su atributo name
    console.log(e.target.name);

    //entonces ahora podemos hacer el setTarea
    //setTarea({...tarea, nombrePropiedad: e.target.value});
    setTarea({
        ...tarea, [e.target.name]: e.target.value,
    })
  };
  //reemplazar ese handleChange, en cada onChange

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={tarea.title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese la descripción"
        name="description"
        value={tarea.description}
        onChange={handleChange}
      />
      <select className="form-select mb-2" name="state" value={tarea.state} onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
```

## Hay un tipo de input que no resulta con la técnica del handleChange...
es el checkbox
- agreguemos esto debajo de textarea:
```js
    <div>
        <input type="checkbox" name='priority' className='form-check-input mb-2' id='inputCheck' />
        <label htmlFor="inputCheck">Dar prioridad</label>
    </div>
```

tenemos que mandar la propiedad `priority` al objeto de tarea, el useState, y luego hacer estas modificaciones dentro de el checkbox
```js
    <div>
        <input 
            type="checkbox" 
            name='priority' 
            className='form-check-input mb-2' 
            id='inputCheck' 
            checked={tarea.priority}
            onChange={(e) => setTarea({...tarea, priority: e.target.checked})}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
    </div>
```
Ahora nos debe aparecer marcado al recargar, podemos ver components en el navegador

> Con esto aprendimos otro campo, pero nos hace falta reutilizar la lógica del handleChange

## Reutilizando funciones
```js
import { useState } from 'react';

const Controlado = () => {
  const [tarea, setTarea] = useState({
    title: 'tarea 1',
    description: 'descripción 1',
    state: 'pendiente',
    priority: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tarea.title);
  };

  const handleChange = (e) => {
    //aquí le decimos que, si el tipo de campo es igual a checkbox entonces que le pase checked,
    //pero sino, que normal le pase value
    setTarea({
        ...tarea, 
        [e.target.name]: 
            e.target.type === "checkbox" 
                ? e.target.checked 
                    : e.target.value
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={tarea.title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese la descripción"
        name="description"
        value={tarea.description}
        onChange={handleChange}
      />

      <div>
        <input 
            type="checkbox" 
            name='priority' 
            className='form-check-input mb-2' 
            id='inputCheck' 
            checked={tarea.priority}
            onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>

      <select className="form-select mb-2" name="state" value={tarea.state} onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;

```

## Podríamos hacer una desestructuración de useState y handleChange
Podría ser tarea
```js
import { useState } from 'react';

const Controlado = () => {
  const [tarea, setTarea] = useState({
    title: 'tarea 1',
    description: 'descripción 1',
    state: 'pendiente',
    priority: true
  });

  //d e s t r u c t u r i g...
  const {title, description, state, priority} = tarea;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  const handleChange = (e) => {
    //d e s t r u c t u r i g...
    const {name, type, checked, value} = e.target;

    setTarea({
        ...tarea, 
        [name]: 
            type === "checkbox" 
                ? checked 
                    : value
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Tarea"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese la descripción"
        name="description"
        value={description}
        onChange={handleChange}
      />

      <div>
        <input 
            type="checkbox" 
            name='priority' 
            className='form-check-input mb-2' 
            id='inputCheck' 
            checked={priority}
            onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>

      <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;
```

## Tarea: hacer la pequeña validación:
[que la entreguen los estudiantes]
