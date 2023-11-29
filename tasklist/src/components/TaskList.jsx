/* 
Componente de Lista de Tareas (TaskList):
Este componente deberá mostrar la lista de tareas.
Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
Cada tarea debe representarse mediante un componente TaskItem.
*/

import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ taskList, setTaskList }) {

    return (
        <ul className="list-group my-5 p-0 shadow">
            {taskList.map((taskItem) => (
                <TaskItem key={taskItem.id} taskItem={taskItem} taskList={taskList} setTaskList={setTaskList}></TaskItem>
            ))}
        </ul>
    )
}

export default TaskList;