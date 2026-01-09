import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InteractiveQuiz, { InteractiveQuestion } from './InteractiveQuiz';

const mockQuestions: InteractiveQuestion[] = [
  {
    id: 'q1',
    type: 'multiple-choice',
    question: 'What is 2+2?',
    topic: 'Math',
    difficulty: 'easy',
    points: 10,
    options: ['3', '4', '5'],
    correctAnswer: '4',
    explanation: 'Basic math.'
  },
  {
    id: 'q2',
    type: 'true-false',
    question: 'The sky is blue?',
    topic: 'Science',
    difficulty: 'easy',
    points: 5,
    correctAnswer: 'Verdadero'
  }
];

describe('InteractiveQuiz', () => {
  it('debe renderizar la primera pregunta', () => {
    render(<InteractiveQuiz questions={mockQuestions} />);
    expect(screen.getByText('What is 2+2?')).toBeInTheDocument();
    expect(screen.getByText('Math')).toBeInTheDocument();
    expect(screen.getByText('10 puntos')).toBeInTheDocument();
    
    // Check options
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('debe permitir seleccionar una respuesta y verificarla (Correcta)', () => {
    render(<InteractiveQuiz questions={mockQuestions} />);
    
    // Select correct answer "4"
    fireEvent.click(screen.getByText('4'));
    
    // Verify button enabled
    const verifyBtn = screen.getByText('Verificar Respuesta');
    expect(verifyBtn).not.toBeDisabled();
    
    // Click verify
    fireEvent.click(verifyBtn);
    
    // Check feedback
    expect(screen.getByText(/¡Correcto!/)).toBeInTheDocument();
    expect(screen.getByText('Explicación:')).toBeInTheDocument();
    expect(screen.getByText('Basic math.')).toBeInTheDocument();
  });

  it('debe permitir seleccionar una respuesta y verificarla (Incorrecta)', () => {
    render(<InteractiveQuiz questions={mockQuestions} />);
    
    // Select incorrect answer "3"
    fireEvent.click(screen.getByText('3'));
    
    fireEvent.click(screen.getByText('Verificar Respuesta'));
    
    expect(screen.getByText('Incorrecto')).toBeInTheDocument();
  });

  it('debe avanzar a la siguiente pregunta', () => {
    render(<InteractiveQuiz questions={mockQuestions} />);
    
    // Answer Q1 correctly
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('Verificar Respuesta'));
    
    // Click Next
    const nextBtn = screen.getByText('Siguiente Pregunta');
    fireEvent.click(nextBtn);
    
    // Check Q2 rendered
    expect(screen.getByText('The sky is blue?')).toBeInTheDocument();
    expect(screen.getByText('Verdadero')).toBeInTheDocument();
  });

  it('debe mostrar resultados al finalizar', () => {
    const onComplete = vi.fn();
    render(<InteractiveQuiz questions={[mockQuestions[0]]} onComplete={onComplete} />);
    
    // Answer Q1
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('Verificar Respuesta'));
    
    // Finish
    fireEvent.click(screen.getByText('Ver Resultados'));
    
    expect(screen.getByText('¡Quiz Completado!')).toBeInTheDocument();
    expect(screen.getByText('10 / 10 puntos')).toBeInTheDocument();
    expect(onComplete).toHaveBeenCalledWith(10, 10);
  });
});
