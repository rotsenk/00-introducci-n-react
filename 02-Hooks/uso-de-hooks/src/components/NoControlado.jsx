import { useRef, useState } from 'react';

const NoControlado = () => {

  const form = useRef(null);
  //para validar
  const [error, setError] = useState("");//vacío quiere decir que no hay error
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');//cada vez que procesamos el formulario lo limpio
   
    //capturar los datos
    const data = new FormData(form.current);
    
    //destructuring...
    //usamos llavecitas y dentro podemos usar cada propiedad
    const {title, description, state} = Object.fromEntries([...data.entries()]);
    console.log(title, description, state);

    //validar los datos
    if (!title.trim() || !description.trim() || !state.trim()) {
      //return console.log("Llena este campo");
      return setError('Llena todos los campos');
    }

    //lo que no haremos con formularios no controlados es enviar los datos
  };
  
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
          defaultValue="Tarea 1"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
          defaultValue="Descripción 1"
      />
      <select className="form-select mb-2" name="state" defaultValue="completado">
        <option value="pendiente">Pendiente</option> 
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
      { error !=="" && error }
    </form>
  );
};

export default NoControlado;