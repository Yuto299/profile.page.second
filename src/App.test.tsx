import App from './App';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

test('いいねボタンが正常に作動する', () => {
  render(
    <MemoryRouter initialEntries={['/profile.page']}>
      <App />
    </MemoryRouter>
  );

  const thanksButton = screen.getByRole('button', { name: 'いいね！' });
  userEvent.click(thanksButton);

  expect(mockNavigate).toHaveBeenCalledWith('/thanks');
});
