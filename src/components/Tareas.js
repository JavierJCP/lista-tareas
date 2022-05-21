import { useState } from "react"
import "../styles/Tareas.css"


export default function Tareas( {tarea, onUpdate, onDelete} ){

  const [isEdit, setIsEdit] = useState(false);

  function FormEdit () {

    const [newTarea, setNewTarea] = useState(tarea.title);

    function handleSubmit(e){
      e.preventDefault();
    }

    function handleChance(e) {
      setNewTarea(e.target.value);
    }

    function handleClickEditar() {
      onUpdate(tarea.id, newTarea);
      setIsEdit(false);

    }

    return(
      <div>
        <form className="tarea-editar" onSubmit={handleSubmit}>
          <input type="text" className="editar-input" onChange={handleChance} />
          <button className="editarTarea-btn" type="submit" onClick={handleClickEditar}>
            Cambiar
          </button>
        </form>
      </div>
    )
  }

  function TareaElement() {
    return (
      <div className="contenedor-lista">
        <span className="tareas-sapm">{tarea.title}</span>
        <button className="tarea-editar-btn" type="butto" onClick={()=> setIsEdit(true)}>
          Editar
        </button>
        <button className="tarea-eliminar-btn" type="submit" onClick={(e)=> onDelete(tarea.id)}>
          Eliminar
        </button>
      </div>
    )
  }

  return(
    <div>
      {
        isEdit ? 
          <FormEdit /> :
          <TareaElement />
      }
    </div>
  )
}