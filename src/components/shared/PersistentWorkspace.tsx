import React, { useState, useEffect, useCallback } from 'react';
import {
  CloudArrowUpIcon,
  DocumentTextIcon,
  TrashIcon,
  FolderIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface WorkspaceData {
  exerciseId: string;
  code: string;
  language: 'python' | 'java';
  timestamp: number;
  testResults?: any[];
  notes?: string;
  version: number;
}

interface WorkspaceVersion {
  version: number;
  timestamp: number;
  code: string;
  notes?: string;
}

interface PersistentWorkspaceProps {
  exerciseId: string;
  language: 'python' | 'java';
  code: string;
  onCodeRestore: (code: string) => void;
  onNotesChange?: (notes: string) => void;
  autoSaveInterval?: number; // milliseconds
}

export const PersistentWorkspace: React.FC<PersistentWorkspaceProps> = ({
  exerciseId,
  language,
  code,
  onCodeRestore,
  onNotesChange,
  autoSaveInterval = 5000 // 5 seconds
}) => {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [notes, setNotes] = useState('');
  const [versions, setVersions] = useState<WorkspaceVersion[]>([]);
  const [showVersions, setShowVersions] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error'>('saved');

  const workspaceKey = `workspace_${exerciseId}_${language}`;
  const versionsKey = `versions_${exerciseId}_${language}`;
  const notesKey = `notes_${exerciseId}_${language}`;

  // Load workspace data on mount
  useEffect(() => {
    loadWorkspace();
    loadVersions();
    loadNotes();
  }, [exerciseId, language]);

  // Auto-save functionality
  useEffect(() => {
    if (code.trim()) {
      const autoSaveTimer = setTimeout(() => {
        saveWorkspace();
      }, autoSaveInterval);

      return () => clearTimeout(autoSaveTimer);
    }
    return undefined;
  }, [code, notes]);

  const loadWorkspace = () => {
    try {
      const saved = localStorage.getItem(workspaceKey);
      if (saved) {
        const data: WorkspaceData = JSON.parse(saved);
        if (data.code && data.code !== code) {
          // Only restore if there's meaningful difference
          onCodeRestore(data.code);
        }
        setLastSaved(new Date(data.timestamp));
      }
    } catch (error) {
      console.error('Error loading workspace:', error);
    }
  };

  const loadVersions = () => {
    try {
      const saved = localStorage.getItem(versionsKey);
      if (saved) {
        const versionData: WorkspaceVersion[] = JSON.parse(saved);
        setVersions(versionData.slice(-10)); // Keep last 10 versions
      }
    } catch (error) {
      console.error('Error loading versions:', error);
    }
  };

  const loadNotes = () => {
    try {
      const saved = localStorage.getItem(notesKey);
      if (saved) {
        setNotes(saved);
      }
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const saveWorkspace = useCallback(async () => {
    if (!code.trim()) return;

    setIsSaving(true);
    setSaveStatus('saving');

    try {
      const workspaceData: WorkspaceData = {
        exerciseId,
        code,
        language,
        timestamp: Date.now(),
        notes: notes || undefined,
        version: versions.length + 1
      };

      // Save main workspace
      localStorage.setItem(workspaceKey, JSON.stringify(workspaceData));
      
      // Save notes separately
      if (notes) {
        localStorage.setItem(notesKey, notes);
      }

      // Create version snapshot if code has changed significantly
      const lastVersion = versions[versions.length - 1];
      if (!lastVersion || lastVersion.code !== code) {
        const newVersion: WorkspaceVersion = {
          version: workspaceData.version,
          timestamp: workspaceData.timestamp,
          code,
          notes
        };

        const newVersions = [...versions.slice(-9), newVersion]; // Keep last 10
        setVersions(newVersions);
        localStorage.setItem(versionsKey, JSON.stringify(newVersions));
      }

      setLastSaved(new Date());
      setSaveStatus('saved');
    } catch (error) {
      console.error('Error saving workspace:', error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  }, [code, notes, exerciseId, language, versions]);

  const restoreVersion = (version: WorkspaceVersion) => {
    onCodeRestore(version.code);
    if (version.notes) {
      setNotes(version.notes);
      onNotesChange?.(version.notes);
    }
    setShowVersions(false);
  };

  const clearWorkspace = () => {
    if (confirm('¿Estás seguro de que quieres borrar todo el progreso guardado?')) {
      localStorage.removeItem(workspaceKey);
      localStorage.removeItem(versionsKey);
      localStorage.removeItem(notesKey);
      setVersions([]);
      setNotes('');
      setLastSaved(null);
      onCodeRestore('');
      onNotesChange?.('');
    }
  };

  const handleNotesChange = (newNotes: string) => {
    setNotes(newNotes);
    onNotesChange?.(newNotes);
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    if (diff < 60000) { // Less than 1 minute
      return 'hace unos segundos';
    } else if (diff < 3600000) { // Less than 1 hour
      return `hace ${Math.floor(diff / 60000)} min`;
    } else if (diff < 86400000) { // Less than 1 day
      return `hace ${Math.floor(diff / 3600000)} h`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getStatusIcon = () => {
    switch (saveStatus) {
      case 'saving':
        return <CloudArrowUpIcon className="h-4 w-4 text-blue-500 animate-pulse" />;
      case 'saved':
        return <CheckCircleIcon className="h-4 w-4 text-green-500" />;
      case 'error':
        return <CloudArrowUpIcon className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusText = () => {
    switch (saveStatus) {
      case 'saving':
        return 'Guardando...';
      case 'saved':
        return lastSaved ? `Guardado ${formatTime(lastSaved.getTime())}` : 'Guardado';
      case 'error':
        return 'Error al guardar';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow border">
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderIcon className="h-5 w-5 text-purple-600" />
          <span className="font-medium text-sm">Workspace</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            {getStatusIcon()}
            {getStatusText()}
          </div>
          <button
            onClick={() => saveWorkspace()}
            disabled={isSaving}
            className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Guardar ahora
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Notes Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            📝 Notas del ejercicio
          </label>
          <textarea
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="Escribe aquí tus notas, ideas, o recordatorios sobre este ejercicio..."
            className="w-full h-20 p-3 border rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Version History */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700">
              🕒 Historial de versiones ({versions.length})
            </label>
            <button
              onClick={() => setShowVersions(!showVersions)}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              {showVersions ? 'Ocultar' : 'Mostrar'} historial
            </button>
          </div>

          {showVersions && (
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {versions.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                  No hay versiones guardadas aún
                </p>
              ) : (
                versions.slice().reverse().map((version) => (
                  <div
                    key={version.version}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded border hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <DocumentTextIcon className="h-4 w-4 text-gray-500" />
                      <div>
                        <div className="text-sm font-medium">
                          Versión {version.version}
                        </div>
                        <div className="text-xs text-gray-600">
                          {formatTime(version.timestamp)}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => restoreVersion(version)}
                      className="text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Restaurar
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Workspace Actions */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="text-xs text-gray-500">
            💾 Auto-guardado cada {autoSaveInterval / 1000}s
          </div>
          <button
            onClick={clearWorkspace}
            className="flex items-center gap-1 text-xs px-2 py-1 text-red-600 hover:bg-red-50 rounded"
          >
            <TrashIcon className="h-3 w-3" />
            Limpiar workspace
          </button>
        </div>

        {/* Storage Usage */}
        <div className="text-xs text-gray-400 pt-1 border-t">
          <div className="flex items-center justify-between">
            <span>Almacenamiento local utilizado</span>
            <span>
              {Math.round(
                (JSON.stringify({ code, notes, versions }).length / 1024)
              )}KB
            </span>
          </div>
          <div className="mt-1 text-center">
            Los datos se guardan en tu navegador y persisten entre sesiones
          </div>
        </div>
      </div>
    </div>
  );
};
