//write a test for the shopping list form rendering, name input,
//and submit button.

// Path: src\components\ShoppingList\ShoppingListForm.test.jsx

import { render, fireEvent } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';

describe('ShoppingListForm', () => {
  it.skip('renders the form with the correct test id', () => {
    const { getByTestId } = render(<ShoppingListForm id={1} />);
    const form = getByTestId('shopping-list-form-1');
    expect(form).toBeInTheDocument();
  });

  it.skip('renders the name input with the correct test id', () => {
    const { getByTestId } = render(<ShoppingListForm id={1} />);
    const input = getByTestId('shopping-list-form-name-1');
    expect(input).toBeInTheDocument();
  });

  it.skip('renders the submit button with the correct test id', () => {
    const { getByTestId } = render(<ShoppingListForm id={1} />);
    const button = getByTestId('shopping-list-form-submit-button-1');
    expect(button).toBeInTheDocument();
  });

  it.skip('submits the form with the correct name', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <ShoppingListForm id={1} onSubmit={onSubmit} />
    );
    const input = getByTestId('shopping-list-form-name-1');
    const button = getByTestId('shopping-list-form-submit-button-1');

    fireEvent.change(input, { target: { value: 'Grocery List' } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith({
      id: null,
      name: 'Grocery List',
      shoppingItems: [],
    });
  });
});
