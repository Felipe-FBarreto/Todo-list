import React from 'react';
import * as C from './App.styles';
import { Item } from './Types/Item';
import { ListItens } from './Components/ListItem';
import { AddArea } from './Components/AddArea';

const App = () => {
  const [list, setList] = React.useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItens key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
