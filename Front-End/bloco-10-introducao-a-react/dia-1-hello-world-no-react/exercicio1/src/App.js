import React from "react";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const arr = ['Primeira Tarefa', 'Segunda', 'Terceira', 'Quarta'];

function App() {
  return (
    arr.map((element) => Task(element))
  );
}

export default App;
