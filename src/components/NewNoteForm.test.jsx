import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewNoteForm from './NewNoteForm';

test('updates parent state and calls onSubmit', async () => {
  const createNote = vi.fn();
  const user = userEvent.setup();

  render(<NewNoteForm onSubmit={createNote} />);

  const input = screen.getByRole('textbox');
  const sendButton = screen.getByText('Add');

  await user.type(input, 'testing a form...');
  await user.click(sendButton);

  expect(createNote.mock.calls).toHaveLength(1);
  expect(createNote.mock.calls[0][0].content).toBe('testing a form...');

  console.log('- - -');
  console.log(createNote.mock.calls);
  console.log('- - -');
});
