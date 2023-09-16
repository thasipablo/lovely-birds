import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import BirdsSpeciesList from './BirdsSpeciesList';

const mockStore = configureStore([thunk]);

describe('Testing for the BirdsSpeciesList component', () => {
  let store;

  const initialState = {
    bird: {
      birds: [
        {
          speciesCode: 'sparrow',
          comName: 'House Sparrow',
          locName: 'Common Sparrow',
          howMany: 10,
        },
        {
          speciesCode: 'robin',
          comName: 'American Robin',
          locName: 'Red-breasted Robin',
          howMany: 5,
        },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render the component without errors', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <BirdsSpeciesList />
        </MemoryRouter>
      </Provider>,
    );
    expect(container).toBeDefined();
  });

  it('should show the correct information in the list items', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <BirdsSpeciesList />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('House Sparrow').textContent).toBe(
        'House Sparrow',
      );
      expect(screen.getByText('American Robin').textContent).toBe(
        'American Robin',
      );
    });
  });
});
