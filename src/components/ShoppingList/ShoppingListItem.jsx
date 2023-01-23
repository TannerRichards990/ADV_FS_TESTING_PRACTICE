//This function accepts the following props:
//onUpdateShoppingItem, onDeleteShoppingItem, shoppingItem.
//Shopping item is an object that contains the id, name, etc.
// export default function ShoppingListItem({
//   onUpdateShoppingItem,
//   onDeleteShoppingItem,
//   shoppingItem,
// }) {
//   //This function is called when the user types in the input field.
//   const handleUpdate = (event) => {
//     onUpdateShoppingItem(shoppingItem.id, {
//       ...shoppingItem,
//       name: event.target.value,
//     });
//   };
//   //This function is called when the user clicks the delete button.
//   const handleDelete = () => {
//     onDeleteShoppingItem(shoppingItem.id);
//   };
//   //This function returns the following JSX:
//   return (
//     <div>
//       <input
//         type="text"
//         value={shoppingItem.name}
//         onChange={handleUpdate}
//       />
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// }
//This function is called when the user clicks the delete button.

import React from 'react';

const ShoppingListItem = ({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) => {
  const [updatedItem, setUpdatedItem] = React.useState({
    ...shoppingItem,
  });

  const handleChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="item_name"
          value={updatedItem.item_name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          value={updatedItem.quantity}
          onChange={handleChange}
        />
      </form>
      <span>
        {shoppingItem.item_name}: {shoppingItem.quantity}
      </span>
      <br />
      <button
        data-testid={`update-shopping-item-${shoppingItem.id}`}
        onClick={() => onUpdateShoppingItem(updatedItem)}
      >
        Update
      </button>
      <br />
      <button
        data-testid={`delete-shopping-item-${shoppingItem.id}`}
        onClick={() => onDeleteShoppingItem(shoppingItem.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ShoppingListItem;
