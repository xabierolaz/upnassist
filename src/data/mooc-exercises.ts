import { section1 } from './part1/section1';
import { section2 } from './part1/section2';
import { section3 } from './part1/section3';
import { section4 } from './part1/section4';
import { section5 } from './part1/section5';

export interface Exercise {
  id: string;
  title: string;
  description?: string; // Added description field
  initialCode: string;
  testCode: string;
}

export interface ContentBlock {
  type: 'markdown' | 'exercise';
  content?: string;
  exerciseId?: string;
  title?: string;
  description?: string; // Allow defining it in the block too
  initialCode?: string;
  testCode?: string;
}

export interface CoursePage {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export const coursePages: CoursePage[] = [
  section1,
  section2,
  section3,
  section4,
  section5
];

const extractExercises = (pages: CoursePage[]): Record<string, Exercise> => {
  const exercises: Record<string, Exercise> = {};
  pages.forEach(page => {
    page.blocks.forEach(block => {
      if (block.type === 'exercise' && block.exerciseId) {
        exercises[block.exerciseId] = {
          id: block.exerciseId,
          title: block.title || 'Untitled Exercise',
          description: block.description || '', // Extract description
          initialCode: block.initialCode || '',
          testCode: block.testCode || ''
        };
      }
    });
  });
  return exercises;
};

export const exercisesDB: Record<string, Exercise> = extractExercises(coursePages);

export const playgroundExercise: Exercise = {
  id: "playground",
  title: "Sandbox / Playground",
  description: "Space to experiment freely.",
  initialCode: "# Sandbox\nprint(\"Hola\")\n",
  testCode: ""
};

export const getExercise = (id: string): Exercise | undefined => exercisesDB[id];
export const moocExercises: Exercise[] = Object.values(exercisesDB);
