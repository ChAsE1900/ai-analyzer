import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface DragDropZoneProps {
  onFileSelected: (file: File) => void;
  isLoading: boolean;
}

export function DragDropZone({ onFileSelected, isLoading }: DragDropZoneProps) {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (isLoading) return; // Prevent drop while loading

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      onFileSelected(file);
    }
  }, [onFileSelected, isLoading]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${isLoading ? 'bg-gray-300 border-gray-400 cursor-not-allowed' : 'border-blue-400 hover:border-blue-600'}`}
    >
      <div className="flex flex-col items-center space-y-4">
        <Upload className="w-12 h-12 text-blue-500" />
        <div className="text-lg font-medium">
          {isLoading ? (
            <span className="text-gray-600">Analyzing gameplay...</span>
          ) : (
            <span>Drag your Fortnite gameplay video here (Duration can be between 10 Seconds and 15 Minutes)</span>
          )}
        </div>
        <p className="text-sm text-gray-500">
          Supports MP4, MOV, and AVI files
        </p>
      </div>
    </div>
  );
}