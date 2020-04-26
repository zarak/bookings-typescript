import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Bookables from './Bookables';
import { bookablesData } from "../bookablesData";

test('renders learn react link', () => {
  const { getByTestId } = render(<Bookables bookablesByGroup={bookablesData} />);
  expect(getByTestId("0")).toHaveTextContent("Lounge");
});
