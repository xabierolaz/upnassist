import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Quiz } from './Quiz';

vi.mock('../../store/languageStore', () => ({
  useLanguageStore: () => ({
    currentLang: 'ENG',
    t: { 
        submit: 'Submit',
        correct: 'Correct!',
        incorrect: 'Incorrect',
        next: 'Next',
        previous: 'Previous'
    },
  }),
}));

const mockQuestions: any[] = [
  {
    id: 'q1',
    type: 'single',
    prompt: { ENG: 'What is 2+2?' },
    options: [
      { id: 'o1', text: { ENG: '3' } },
      { id: 'o2', text: { ENG: '4' }, isCorrect: true },
      { id: 'o3', text: { ENG: '5' } }
    ]
  }
];

describe('Quiz Component', () => {
  it('should render question and options', () => {
    render(<Quiz questions={mockQuestions} />);
    expect(screen.getByText(/What is 2\+2\?/)).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should handle correct answer selection', () => {
    render(<Quiz questions={mockQuestions} />);
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText(/check/i));
    
    expect(screen.getByText(/correct/i)).toBeInTheDocument();
    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  it('should handle incorrect answer selection', () => {
    render(<Quiz questions={mockQuestions} />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText(/check/i));
    
    expect(screen.getByText(/incorrect/i)).toBeInTheDocument();
    expect(screen.getByText('✗')).toBeInTheDocument();
  });
});
