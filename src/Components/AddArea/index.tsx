import React from 'react';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [value, setValue] = React.useState('');

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && value !== '') {
      onEnter(value);
      setValue('');
    }
  };

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
