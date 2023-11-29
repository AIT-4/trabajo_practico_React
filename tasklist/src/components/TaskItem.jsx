/*
Componente de Tarea (TaskItem):
Este componente deberá representar individualmente una tarea.
Mostrará el nombre de la tarea y un botón para completarla.
Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
cuando esté completada).
*/

import React from "react";


function TaskItem({ taskItem, taskList, setTaskList }) {

    function completarTask(taskItem) {
        const index = taskList.findIndex((task) => task.id === taskItem.id);
        const nuevaLista = [...taskList];
        nuevaLista[index].completado = !nuevaLista[index].completado;
        setTaskList(nuevaLista);
    }

    function eliminarTask(taskItem) {
        const nuevaLista = taskList.filter((task) => task.id !== taskItem.id);
        setTaskList(nuevaLista);
    }

    return (
        <li className="list-group-item py-3">
            <div className="row">
                <button className={taskItem.completado ? "btn btn-light btn-sm col-auto mx-2" : "btn btn-success btn-sm col-auto mx-2"} onClick={() => completarTask(taskItem)}><i class="fas fa-check fa-sm"></i></button>
                <span className={taskItem.completado ? "col text-start text-decoration-line-through opacity-75" : "col text-start"}>{taskItem.texto}</span>
                <button className="btn btn-danger btn-sm col-auto mx-2" onClick={() => eliminarTask(taskItem)}><i class="fas fa-times fa-lg"></i></button>
            </div>
        </li>
    )
}


export default TaskItem;
