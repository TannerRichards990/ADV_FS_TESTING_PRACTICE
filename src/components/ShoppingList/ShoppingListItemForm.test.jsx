import { render, fireEvent, screen } from '@testing-library/react';
import ShoppingListItemForm from './ShoppingListItemForm';

describe('ShoppingListItemForm', () => {
  let onSubmitMock;

  beforeEach(() => {
    onSubmitMock = jest.fn();
    render(<ShoppingListItemForm onSubmit={onSubmitMock} />);
  });

  it('should render a form', () => {
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });

  // eslint-disable-next-line max-len
  it('should call onSubmit with the correct new item when the form is submitted', () => {
    const itemInput = screen.getByTestId('item-input');
    const quantityInput = screen.getByTestId('quantity-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(itemInput, { target: { value: 'bananas' } });
    fireEvent.change(quantityInput, { target: { value: '5' } });
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith({
      item_name: 'bananas',
      quantity: '5',
    });
  });
});
