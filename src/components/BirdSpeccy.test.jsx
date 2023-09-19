import React from 'react';
import { render, screen } from '@testing-library/react';
import BirdSpeccy from './BirdSpeccy';
import '@testing-library/jest-dom/extend-expect';

describe('BirdSpeccy Component', () => {
  const sampleSpeccy = {
    comName: 'House Sparrow',
    howMany: 10,
  };

  it('renders the component with correct content', () => {
    render(<BirdSpeccy speccy={sampleSpeccy} />);
    expect(screen.getByText('House Sparrow')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('renders the component with default howMany if not provided', () => {
    const speccyWithoutHowMany = {
      comName: 'American Robin',
    };
    render(<BirdSpeccy speccy={speccyWithoutHowMany} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
