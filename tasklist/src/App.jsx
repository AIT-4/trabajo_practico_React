import React, { useState , useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const [taskList, setTaskList] = useState([
    { id: 1, texto: "Revisar las facturas y mis cuentas", completado: false },
    { id: 2, texto: "Comprar comida de mis mascotas", completado: false },
  ]);

  function mostrarMensaje () {
    if (taskList.length === 0) {
      alert("La lista de tareas no tiene más elementos");
    }
  }

  useEffect (mostrarMensaje, [taskList]);

  return (
    <div className="container">
      <h1 className="border-bottom mb-4 py-2"><strong>ANOTADOR DE TAREAS</strong></h1>
      <div className="row p-5">
        <TaskForm taskList={taskList} setTaskList={setTaskList}></TaskForm>
        <TaskList taskList={taskList} setTaskList={setTaskList}></TaskList>
      </div>
    </div>
  );
}

export default App;