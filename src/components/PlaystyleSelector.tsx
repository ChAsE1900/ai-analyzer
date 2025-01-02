import React, { useState } from 'react';

interface PlaystyleSelectorProps {
  onSelectPlaystyle: (playstyle: string) => void;
}

export const PlaystyleSelector: React.FC<PlaystyleSelectorProps> = ({ onSelectPlaystyle }) => {
  const [selectedPlaystyle, setSelectedPlaystyle] = useState<string | null>(null);

  const playstyles = [
    { id: 'aggressive', label: 'Aggressive' },
    { id: 'defensive', label: 'Defensive' },
    { id: 'strategic', label: 'Strategic' },
    { id: 'balanced', label: 'Balanced' },
  ];

  const handleSelection = (playstyle: string) => {
    setSelectedPlaystyle(playstyle);
    onSelectPlaystyle(playstyle);
  };

  if (selectedPlaystyle) {
    return (
      <div className="p-4 bg-green-100 rounded-lg">
        <p className="text-lg font-bold text-green-800">
          Selected Playstyle: {playstyles.find((s) => s.id === selectedPlaystyle)?.label}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Select Your Playstyle</h2>
      <div className="space-y-4">
        {playstyles.map((style) => (
          <button
            key={style.id}
            className={`w-full py-2 px-4 text-lg font-medium rounded-lg hover:bg-blue-500 transition ${
              selectedPlaystyle === style.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleSelection(style.id)}
          >
            {style.label}
          </button>
        ))}
      </div>
    </div>
  );
};