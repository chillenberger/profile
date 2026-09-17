import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

vi.mock('./components/AIChat', () => ({
  default: () => <div data-testid="ai-chat" />,
}));

describe('App routing and layout', () => {
  it('renders home sections on root route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByText(/experience_log/i)).toBeInTheDocument();
    expect(screen.getByText(/project_database/i)).toBeInTheDocument();
    expect(screen.getByText(/technical_toolkit/i)).toBeInTheDocument();
    expect(screen.getByText(/education_records/i)).toBeInTheDocument();
    expect(screen.getByText(/initialize_connection/i)).toBeInTheDocument();
  });

  it('renders blog layout on /blog route', async () => {
    render(
      <MemoryRouter initialEntries={['/blog/']}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByText(/data_logs_1/i)).toBeInTheDocument();
  });
});