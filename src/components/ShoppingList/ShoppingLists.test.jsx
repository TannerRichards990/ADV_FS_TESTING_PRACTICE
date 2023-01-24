//Write a test for creating new shopping lists.

import { render, fireEvent } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('ShoppingLists component', () => {
  it('renders shopping lists', () => {
    //creates a mock function that renders the shopping lists component
    //with an empty array of shopping lists
    const onCreateShoppingList = jest.fn();
    const { getByTestId } = render(
      <ShoppingLists
        onCreateShoppingList={onCreateShoppingList}
        shoppingLists={[]}
      />
    );
    //creates a variable that gets the test id of the shopping lists
    const input = getByTestId('shopping-list-form-name-new');

    const submitButton = getByTestId(
      'shopping-list-form-submit-button-new'
    );
    //fires an event that changes the value of the input to 'newShoppingList'
    //and clicks the submit button
    fireEvent.change(input, { target: { value: 'newShoppingList' } });
    fireEvent.click(submitButton);

    expect(onCreateShoppingList).toHaveBeenCalledWith({
      id: null,
      name: 'newShoppingList',
      shoppingItems: [],
    });
    //expect the mock function to have been called with the correct argument.
  });
});
