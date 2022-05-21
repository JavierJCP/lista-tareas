import { useState } from "react";
import Tareas from "./Tareas";
import "../styles/Tarea.css"

export default function Tarea () {

  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  function handleChace (e) {
    setTarea(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTarea = {
      id: crypto.randomUUID(),
      title: tarea,
    };
    setListaTareas([newTarea, ...listaTareas]);
    setTarea('');
  }

  function handleUpdate(id, value) {
    const temp = [...listaTareas];
    const tarea = temp.find(tarea => tarea.id === id);
    tarea.title = value;
    setListaTareas(temp);
  }

  function handleDelete (id) {
    const temp = listaTareas.filter(tarea => tarea.id !== id);
    setListaTareas(temp);
  }

  return(
    <div className="contenedor-tareas">
      <form className="tarea-formulario">
        <input type="text" className="tarea-input" onChange={handleChace} value={tarea}/>
        <button className="tarea-btn" type="submit" onClick={handleSubmit}>
          Guardar
        </button>
      </form>
      <div>
        {
          listaTareas.map((tarea) => (
            <Tareas 
              key={tarea.id}
              tarea={tarea}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </div>
    </div>
  )
}