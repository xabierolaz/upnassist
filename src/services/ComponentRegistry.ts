/**
 * ComponentRegistry - Registro de componentes dinámicos
 * Permite registrar y renderizar componentes por nombre
 */

import React from 'react';

class ComponentRegistryClass {
  private components: Map<string, React.ComponentType<any>> = new Map();

  /**
   * Registra un componente con un nombre
   */
  register(name: string, component: React.ComponentType<any>): void {
    this.components.set(name, component);
  }

  /**
   * Obtiene un componente por nombre
   */
  get(name: string): React.ComponentType<any> | undefined {
    return this.components.get(name);
  }

  /**
   * Renderiza un componente por nombre con props
   */
  renderComponent(name: string, props?: any): React.ReactElement | null {
    const Component = this.get(name);
    
    if (!Component) {
      console.warn(`Componente no encontrado: ${name}`);
      return null;
    }

    return React.createElement(Component, props);
  }

  /**
   * Verifica si un componente está registrado
   */
  has(name: string): boolean {
    return this.components.has(name);
  }

  /**
   * Lista todos los componentes registrados
   */
  list(): string[] {
    return Array.from(this.components.keys());
  }
}

// Singleton instance
export const ComponentRegistry = new ComponentRegistryClass();

// Export para registrar componentes desde otros módulos
export function registerComponent(name: string, component: React.ComponentType<any>): void {
  ComponentRegistry.register(name, component);
}