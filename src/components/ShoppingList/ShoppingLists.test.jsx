//Write a test for creating new shopping lists.

// Path: src\components\ShoppingList\ShoppingLists.test.jsx

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import ShoppingLists from './ShoppingLists.jsx';

describe('ShoppingLists', () => {
  it.only('creates a new shopping list', () => {
    const onCreateShoppingList = jest.fn();
    render( 
      <ShoppingLists
        onCreateShoppingList={onCreateShoppingList}
        shoppingLists={[]}
      />
    );
    fireEvent.change(screen.getByTestId('shopping-list-name-new'), {
      target: { value: 'My Shopping List' },
    });
    fireEvent.click(screen.getByTestId('shopping-list-submit-new'));
    expect(onCreateShoppingList).toHaveBeenCalledWith('My Shopping List');
  });
});
