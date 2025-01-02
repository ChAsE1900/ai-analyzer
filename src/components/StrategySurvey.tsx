import React, { useState, useEffect } from "react";

interface StrategySurveyProps {
  onSubmit: (responses: any) => void;
}

export const StrategySurvey: React.FC<StrategySurveyProps> = ({ onSubmit }) => {
  const [responses, setResponses] = useState({
    landingSpot: '',
    combatStyle: '',
    resourceManagement: '',
    mapAwareness: '',
    playstyle: '',
  });

  // This will determine if all fields have been filled out
  const isFormValid = Object.values(responses).every(value => value !== '');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setResponses(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(responses); // Pass responses back to App
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900">Gameplay Strategy Survey</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Question 1: Landing Spot */}
        <div>
          <label className="text-gray-700 font-medium">What type of landing spot do you usually prefer?</label>
          <select
            name="landingSpot"
            value={responses.landingSpot}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>Select an option</option>
            <option value="safe">Safe (Low risk, further from enemies)</option>
            <option value="isolated">Isolated (Few players, but limited loot)</option>
            <option value="hotspot">Hotspot (High competition, great loot)</option>
          </select>
        </div>

        {/* Question 2: Combat Style */}
        <div>
          <label className="text-gray-700 font-medium">What's your combat style like?</label>
          <select
            name="combatStyle"
            value={responses.combatStyle}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>Select an option</option>
            <option value="aggressive">Aggressive (Focus on eliminating opponents early)</option>
            <option value="defensive">Defensive (Play it safe and wait for others)</option>
            <option value="balanced">Balanced (Attack when necessary, but focus on survival)</option>
          </select>
        </div>

        {/* Question 3: Resource Management */}
        <div>
          <label className="text-gray-700 font-medium">How well do you manage your resources?</label>
          <select
            name="resourceManagement"
            value={responses.resourceManagement}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>Select an option</option>
            <option value="excellent">Excellent (Always stocked up and have enough materials)</option>
            <option value="average">Average (Can run out of materials at times)</option>
            <option value="poor">Poor (Often running low on resources)</option>
          </select>
        </div>

        {/* Question 4: Map Awareness */}
        <div>
          <label className="text-gray-700 font-medium">How would you rate your map awareness?</label>
          <select
            name="mapAwareness"
            value={responses.mapAwareness}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>Select an option</option>
            <option value="excellent">Excellent (Always know where the circle is and plan ahead)</option>
            <option value="average">Average (Aware of the circle but sometimes caught off guard)</option>
            <option value="poor">Poor (Often get caught outside the safe zone)</option>
          </select>
        </div>

        {/* Question 5: Playstyle */}
        <div>
          <label className="text-gray-700 font-medium">What best describes your general playstyle?</label>
          <select
            name="playstyle"
            value={responses.playstyle}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="" disabled>Select an option</option>
            <option value="aggressive">Aggressive</option>
            <option value="defensive">Defensive</option>
            <option value="strategic">Strategic</option>
            <option value="balanced">Balanced</option>
          </select>
        </div>

        <div className="flex justify-between">
          <p className="mt-2 text-black/40">Data helps AI to work more efficiently</p>
          <button
            type="submit"
            disabled={!isFormValid}  // Disable button if the form isn't valid
            className="bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          >
            Send Info
          </button>
        </div>
      </form>
    </div>
  );
};