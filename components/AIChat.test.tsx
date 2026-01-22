import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AIChat from './AIChat';

vi.mock('../services/geminiService', () => ({
  askGeminiAboutDaniel: vi.fn().mockResolvedValue('Mocked AI response about Daniel.'),
}));

vi.mock('../constants', async (orig) => {
  const actual = await orig<typeof import('../Experience')>();
  return {
    ...actual,
    Icons: {
      ...actual.Icons,
      Chat: () => <span data-testid="chat-icon">chat</span>,
    },
  };
});

describe('AIChat', () => {
  it('renders closed by default with floating button', () => {
    render(<AIChat />);
    expect(screen.getByTestId('chat-icon')).toBeInTheDocument();
    expect(screen.queryByText(/SYS.Online/i)).not.toBeInTheDocument();
  });

  it('opens when button is clicked and shows initial AI message', () => {
    render(<AIChat />);

    fireEvent.click(screen.getByTestId('chat-icon'));

    expect(
      screen.getByText(/hi! i'm daniel's career assistant/i)
    ).toBeInTheDocument();
  });

  it('sends a message and shows AI reply', async () => {
    const { askGeminiAboutDaniel } = await import('../services/geminiService');

    render(<AIChat />);
    fireEvent.click(screen.getByTestId('chat-icon'));

    const input = screen.getByPlaceholderText(/INPUT_QUERY.../i);
    fireEvent.change(input, { target: { value: 'Tell me about Daniel.' } });

    fireEvent.submit(input.closest('form') as HTMLFormElement);

    expect(screen.getByText('Tell me about Daniel.')).toBeInTheDocument();

    await waitFor(() => {
      expect(askGeminiAboutDaniel).toHaveBeenCalledWith('Tell me about Daniel.');
      expect(
        screen.getByText('Mocked AI response about Daniel.')
      ).toBeInTheDocument();
    });
  });
});