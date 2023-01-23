import React, { useState } from 'react';
import ShoppingListItem from './ShoppingListItem';

export default function ShoppingListItemForm() {
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
  ]);

  const handleUpdateShoppingItem = (id, updatedShoppingItem) => {
    setShoppingItems((prevShoppingItems) =>
      prevShoppingItems.map((shoppingItem) =>
        shoppingItem.id === id ? updatedShoppingItem : shoppingItem
      )
    );
  };

  const handleDeleteShoppingItem = (id) => {
    setShoppingItems((prevShoppingItems) =>
      prevShoppingItems.filter(
        (shoppingItem) => shoppingItem.id !== id
      )
    );
  };

  return (
    <div>
      <ul>
        {shoppingItems.map((shoppingItem) => (
          <ShoppingListItem
            key={shoppingItem.id}
            shoppingItem={shoppingItem}
            onUpdateShoppingItem={handleUpdateShoppingItem}
            onDeleteShoppingItem={handleDeleteShoppingItem}
          />
        ))}
      </ul>
    </div>
  );
}
