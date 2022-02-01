import React from 'react';
import * as C from './styles';
import { Item } from '../../Types/Item';

type Props = {
  item: Item;
};

export const ListItens = ({ item }: Props) => {
  const [isChecked, setIsChecked] = React.useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};
