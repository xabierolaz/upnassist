import React from 'react';

// Lazy-load visualizers to improve initial bundle size
const InteractiveListVisualizer = React.lazy(() =>
  import('./InteractiveListVisualizer').then(m => ({ default: m.InteractiveListVisualizer }))
);

const FStringVisualizer = React.lazy(() =>
  import('./FStringVisualizer').then(m => ({ default: m.FStringVisualizer }))
);

const SparseMatrixVisualizer = React.lazy(() =>
  import('./SparseMatrixVisualizer').then(m => ({ default: m.SparseMatrixVisualizer }))
);

const MainGuardVisualizer = React.lazy(() =>
  import('./MainGuardVisualizer').then(m => ({ default: m.MainGuardVisualizer }))
);

const OOPVisualizer = React.lazy(() =>
  import('./OOPVisualizer').then(m => ({ default: m.OOPVisualizer }))
);

/**
 * Content block types that map to interactive visualizers
 */
export type VisualizerType =
  | 'interactive-list'
  | 'interactive-fstring'
  | 'interactive-mainguard'
  | 'interactive-sparse-matrix'
  | 'interactive-oop';

/**
 * Registry mapping content block types to their visualizer components.
 * This follows the Open/Closed principle - to add new visualizers,
 * just add an entry to this registry without modifying existing code.
 */
export const VISUALIZER_REGISTRY: Record<VisualizerType, React.LazyExoticComponent<React.FC>> = {
  'interactive-list': InteractiveListVisualizer,
  'interactive-fstring': FStringVisualizer,
  'interactive-mainguard': MainGuardVisualizer,
  'interactive-sparse-matrix': SparseMatrixVisualizer,
  'interactive-oop': OOPVisualizer,
};

/**
 * Check if a content block type is a visualizer
 */
export function isVisualizerType(type: string): type is VisualizerType {
  return type in VISUALIZER_REGISTRY;
}

/**
 * Get the visualizer component for a given content block type.
 * Returns undefined if the type is not a known visualizer.
 */
export function getVisualizer(type: string): React.LazyExoticComponent<React.FC> | undefined {
  if (isVisualizerType(type)) {
    return VISUALIZER_REGISTRY[type];
  }
  return undefined;
}

/**
 * List of all registered visualizer types
 */
export const VISUALIZER_TYPES = Object.keys(VISUALIZER_REGISTRY) as VisualizerType[];
