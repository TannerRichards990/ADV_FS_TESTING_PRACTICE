import React, { useState } from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingListItemForm = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [newItem, setNewItem] = useState({
    item_name: '',
    quantity: 1,
  });

  const handleUpdateShoppingItem = (updatedShoppingItem) => {
    setShoppingItems((prevShoppingItems) =>
      prevShoppingItems.map((shoppingItem) =>
        shoppingItem.id === updatedShoppingItem.id
          ? updatedShoppingItem
          : shoppingItem
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.item_name.trim()) {
      setShoppingItems([
        ...shoppingItems,
        { id: Date.now(), ...newItem },
      ]);
      setNewItem({
        item_name: '',
        quantity: 1,
      });
    }
  };

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item_name"
          value={newItem.item_name}
          onChange={handleChange}
          placeholder="Add a new item"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
          placeholder="Add a quantity"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {shoppingItems.map((shoppingItem) => (
          <ShoppingListItem
            key={shoppingItem.id}
            shoppingItem={shoppingItem}
            onUpdateShoppingItem={handleUpdateShoppingItem}
            onDeleteShoppingItem={handleDeleteShoppingItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingListItemForm;
