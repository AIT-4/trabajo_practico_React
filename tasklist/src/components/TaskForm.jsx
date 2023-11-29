/*
Componente de Formulario (TaskForm):
Este componente contendrá un formulario para agregar nuevas tareas.
Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a
la lista principal.
*/

import React, { useState } from "react";

function TaskForm({ taskList, setTaskList }) {
    const [text, setText] = useState("");


    function agregarTask(text) {
        const ultimoId = taskList.length > 0 ? taskList[taskList.length - 1].id : 1;
        const nuevaTask = { id: ultimoId + 1, texto: text, completado: false };
        const lista = [...taskList];
        lista.push(nuevaTask);
        setTaskList(lista);
    }

    function manejoText(e) {
        setText(e.target.value);
    }

    function manejoTaskEnter(e) {
        if (e.key.toLowerCase() === "enter") {
            agregarTask(text);
            setText("");
            e.preventDefault();
        }
    }

    function manejoTaskButton(e) {
        if (text.length > 0) {
            agregarTask(text);
            setText("");
            e.preventDefault();
        }
        else {
            alert("Falta completar el campo");
            e.preventDefault();
        }
    }

    return (
        <div className="my-5 p-0">
            <form className="row mx-5">
                <label className="form-label text-start fw-semibold">Escribe la tarea que deseas crear</label>
                <div className="col-10">
                    <input className="form-control" type="text" name="text" value={text} onChange={manejoText} onKeyDown={(e) => manejoTaskEnter(e)} />
                </div>
                <div className="col-auto">
                    <button className="btn btn-dark" onClick={(e) => manejoTaskButton(e)}>Agregar</button>
                </div>
                <span className="form-text text-start">Para agregar tarea también puedes usar la tecla ENTER</span>
            </form>
        </div>
    )
}

export default TaskForm;