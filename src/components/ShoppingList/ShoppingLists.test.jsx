//Write a test for creating new shopping lists.

// Path: src\components\ShoppingList\ShoppingLists.test.jsx

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import ShoppingLists from './ShoppingLists.jsx';

describe('ShoppingLists', () => {
  it.skip('creates a new shopping list', () => {
    const onCreateShoppingList = jest.fn();
    render( 
      <ShoppingLists
        onCreateShoppingList={onCreateShoppingList}
        shoppingLists={[]}
      />
    );
    const input = screen.getByTestId('shopping-lists');
    input.value = 'My Shopping List';
    fireEvent.change(input);

      

    fireEvent.click(screen.getByTestId('shopping-lists'));
    expect(onCreateShoppingList).toHaveBeenCalledWith('shopping-lists');
  });
});






