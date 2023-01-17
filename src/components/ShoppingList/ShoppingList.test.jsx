// write a test for the shoppinglist name component

// Path: src\components\ShoppingList\Shopping-Lists-Test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingList from './ShoppingList.jsx';

describe('ShoppingList', () => {
  it.skip('renders the shopping list name', () => {
    const shoppingList = {
      id: '1',
      name: 'My Shopping List',
      shoppingItems: [],
    };
    render(<ShoppingList shoppingList={shoppingList} />);
    expect(screen.queryByTestId('shopping-list-name-1').textContent)
      .toBe('My Shopping List');
  });
});



