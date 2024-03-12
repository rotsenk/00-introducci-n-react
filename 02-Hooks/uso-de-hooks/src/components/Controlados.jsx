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
