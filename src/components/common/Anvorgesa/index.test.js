import React from 'react';
import { Anvorgesa } from './index';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { shallow } from 'enzyme';

function renderAnvorgesa(args) {
  const defaultProps = {
    toggleHandler: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Anvorgesa {...props} />);
}

describe('rendering', () => {
  it('renders without crashing', () => {
    renderAnvorgesa();
  });

  it('renders 3 bars', () => {
    const wrapper = renderAnvorgesa();
    expect(wrapper.find('span').length).toEqual(3);
  });
});

describe('toggle', () => {
  it('calls toggleHandler on click', () => {
    const handler = jest.fn();
    render(<Anvorgesa toggleHandler={handler} />);

    userEvent.click(screen.getByTestId('anvorgesa'));

    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe('snapshots', () => {
  it('Anvorgesa snapshot', () => {
    const tree = renderAnvorgesa();
    expect(tree).toMatchSnapshot();
  });
});
