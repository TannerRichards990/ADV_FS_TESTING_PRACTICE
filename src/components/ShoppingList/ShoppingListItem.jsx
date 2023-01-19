//This function accepts the following props:
//onUpdateShoppingItem, onDeleteShoppingItem, shoppingItem.
//Shopping item is an object that contains the id, name, etc.
export default function ShoppingListItem({
  onUpdateShoppingItem,
  onDeleteShoppingItem,
  shoppingItem,
}) {
  //This function is called when the user types in the input field.
  const handleUpdate = (event) => {
    onUpdateShoppingItem(shoppingItem.id, {
      ...shoppingItem,
      name: event.target.value,
    });
  };
  //This function is called when the user clicks the delete button.
  const handleDelete = () => {
    onDeleteShoppingItem(shoppingItem.id);
  };
  //This function returns the following JSX:
  return (
    <div>
      <input
        type="text"
        value={shoppingItem.name}
        onChange={handleUpdate}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
//This function is called when the user clicks the delete button.
