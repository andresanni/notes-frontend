import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Togglable from './Togglable';
import { beforeEach } from 'vitest';

describe('<Togglable />', () => {
  let container;

  beforeEach(() => {
    container = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv">togglable content</div>
      </Togglable>
    ).container;
  });

  test('renders its children', async () => {
    await screen.findAllByText('togglable content');
  });

  test('at the start the children are not diplayed', () => {
    const childrenDivElement = container.querySelector('.togglableContent');
    expect(childrenDivElement).toHaveStyle({ display: 'none' });
  });

  test('after clicking a button, children are displayed', async () => {
    const user = userEvent.setup();
    const showButton = screen.getByText('show...');

    await user.click(showButton);

    const childrenDivElement = container.querySelector('.togglableContent');
    expect(childrenDivElement).toHaveStyle({ display: 'block' });
  });

  test('toggled content can be closed', async () => {
    const user = userEvent.setup();
    const showButton = screen.getByText('show...');
    const closeButton = screen.getByText('cancel');

    await user.click(showButton);
    await user.click(closeButton);

    const childrenDivElement = container.querySelector('.togglableContent');
    expect(childrenDivElement).toHaveStyle({ display: 'none' });
  });
});
