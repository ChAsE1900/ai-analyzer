import React, { useState } from 'react';
import { DragDropZone } from './components/DragDropZone';
import { AnalysisResult } from './components/AnalysisResult';
import LoadingBar from './components/LoadingBar';
import { Notification } from './components/Notification';
import { Gamepad2 } from 'lucide-react';
import {StrategySurvey}  from './components/StrategySurvey';

interface Feedback {
  type: 'strength' | 'improvement';
  message: string;
}

const generateTailoredFeedback = (responses: any): Feedback[] => {
  const feedback: Feedback[] = [];

  // Check Landing Spot with random feedback options
  if (responses.landingSpot === 'safe') {
    const landingSpotFeedbackOptions = [
      'Safe landing spots are great! Keep focusing on defensive plays.',
      'Landing in safe areas gives you more control, continue focusing on your build-ups.',
    ];
    feedback.push({
      type: 'strength',
      message: landingSpotFeedbackOptions[Math.floor(Math.random() * landingSpotFeedbackOptions.length)],
    });
  } else if (responses.landingSpot === 'isolated') {
    const isolatedSpotFeedbackOptions = [
      'Isolated spots might limit resource gathering; consider revising strategy.',
      'Isolated spots can be tricky but give you time to set up before encountering enemies.',
    ];
    feedback.push({
      type: 'improvement',
      message: isolatedSpotFeedbackOptions[Math.floor(Math.random() * isolatedSpotFeedbackOptions.length)],
    });
  } else if (responses.landingSpot === 'hotspot') {
    const hotspotFeedbackOptions = [
      'Hotspots provide great loot. Focus on being aggressive and controlling the area.',
      'Hotspot landings can be intense but you’ll gain better resources, so stay ready for action!',
    ];
    feedback.push({
      type: 'strength',
      message: hotspotFeedbackOptions[Math.floor(Math.random() * hotspotFeedbackOptions.length)],
    });
  }

  // Check Combat Style with random feedback options
  if (responses.combatStyle === 'aggressive') {
    const aggressiveCombatFeedbackOptions = [
      'Aggressive playstyle helps in early eliminations. Just be cautious of running out of materials.',
      'An aggressive approach often pressures your enemies, but watch out for ambushes as well!',
    ];
    feedback.push({
      type: 'strength',
      message: aggressiveCombatFeedbackOptions[Math.floor(Math.random() * aggressiveCombatFeedbackOptions.length)],
    });
  } else if (responses.combatStyle === 'defensive') {
    const defensiveCombatFeedbackOptions = [
      'Defensive playstyle is useful, but be more proactive in finding opportunities to strike.',
      'Defensive playstyle works well in late-game situations, but don’t hesitate to take control when you can.',
    ];
    feedback.push({
      type: 'improvement',
      message: defensiveCombatFeedbackOptions[Math.floor(Math.random() * defensiveCombatFeedbackOptions.length)],
    });
  } else if (responses.combatStyle === 'balanced') {
    const balancedCombatFeedbackOptions = [
      'A balanced approach helps in adjusting to various situations. Keep assessing the environment.',
      'Balanced play ensures that you always have a good chance at survival, but try to lean into your strengths.',
    ];
    feedback.push({
      type: 'strength',
      message: balancedCombatFeedbackOptions[Math.floor(Math.random() * balancedCombatFeedbackOptions.length)],
    });
  }

  // Check Resource Management with random feedback options
  if (responses.resourceManagement === 'poor') {
    const poorResourceFeedbackOptions = [
      'Focus more on managing resources; don’t run out of materials during fights.',
      'Resource management is crucial. Try gathering more materials before engaging in long fights.',
    ];
    feedback.push({
      type: 'improvement',
      message: poorResourceFeedbackOptions[Math.floor(Math.random() * poorResourceFeedbackOptions.length)],
    });
  } else if (responses.resourceManagement === 'average') {
    const averageResourceFeedbackOptions = [
      'Your resource management is decent! Just make sure to always carry some extra supplies.',
      'Not bad at managing resources, but stay mindful about keeping enough for encounters.',
    ];
    feedback.push({
      type: 'strength',
      message: averageResourceFeedbackOptions[Math.floor(Math.random() * averageResourceFeedbackOptions.length)],
    });
  } else if (responses.resourceManagement === 'excellent') {
    const excellentResourceFeedbackOptions = [
      'Excellent resource management! You always have what you need in the heat of the moment.',
      'Top-notch resource management. Your survival instincts are spot on, well done!',
    ];
    feedback.push({
      type: 'strength',
      message: excellentResourceFeedbackOptions[Math.floor(Math.random() * excellentResourceFeedbackOptions.length)],
    });
  }

  // Check Map Awareness with random feedback options
  if (responses.mapAwareness === 'poor') {
    const poorMapFeedbackOptions = [
      'Map awareness could be improved. Be cautious of the storm circle timing.',
      'You’re often caught off-guard by the storm; try staying ahead by checking the map regularly.',
    ];
    feedback.push({
      type: 'improvement',
      message: poorMapFeedbackOptions[Math.floor(Math.random() * poorMapFeedbackOptions.length)],
    });
  } else if (responses.mapAwareness === 'average') {
    const averageMapFeedbackOptions = [
      'Good map awareness, but stay alert for timing and upcoming danger zones.',
      'You’re usually in the right spot, just try improving how much you plan ahead for the circle.',
    ];
    feedback.push({
      type: 'strength',
      message: averageMapFeedbackOptions[Math.floor(Math.random() * averageMapFeedbackOptions.length)],
    });
  } else if (responses.mapAwareness === 'excellent') {
    const excellentMapFeedbackOptions = [
      'Excellent map awareness. Always in control of your positioning and timing.',
      'Perfect map awareness! You’re always planning ahead and anticipating the next move.',
    ];
    feedback.push({
      type: 'strength',
      message: excellentMapFeedbackOptions[Math.floor(Math.random() * excellentMapFeedbackOptions.length)],
    });
  }

  // Check Playstyle with random feedback options
  if (responses.playstyle === 'aggressive') {
    const aggressivePlayFeedbackOptions = [
      'Aggressive playstyle puts pressure on your opponents. Just ensure you don’t rush into risky situations.',
      'Going aggressive is your key strength, but you need to avoid getting overconfident or too exposed.',
    ];
    feedback.push({
      type: 'strength',
      message: aggressivePlayFeedbackOptions[Math.floor(Math.random() * aggressivePlayFeedbackOptions.length)],
    });
  } else if (responses.playstyle === 'defensive') {
    const defensivePlayFeedbackOptions = [
      'Defensive playstyle keeps you safe but remember to take the fight when you’re in a favorable position.',
      'Don’t wait too long! While defensive strategies are solid, striking at the right moment can make all the difference.',
    ];
    feedback.push({
      type: 'improvement',
      message: defensivePlayFeedbackOptions[Math.floor(Math.random() * defensivePlayFeedbackOptions.length)],
    });
  } else if (responses.playstyle === 'strategic') {
    const strategicPlayFeedbackOptions = [
      'Strategic playstyle gives you an edge by thinking ahead. Stick to solid plans but remain adaptable.',
      'Your strategy is on point, but make sure you don’t get trapped in the plan, always stay flexible.',
    ];
    feedback.push({
      type: 'strength',
      message: strategicPlayFeedbackOptions[Math.floor(Math.random() * strategicPlayFeedbackOptions.length)],
    });
  } else if (responses.playstyle === 'balanced') {
    const balancedPlayFeedbackOptions = [
      'Balanced playstyle allows you to adjust according to the game. Stay calm and stick to the fundamentals.',
      'Balancing your attacks and defense gives you an edge, just make sure to recognize when to prioritize survival or aggression.',
    ];
    feedback.push({
      type: 'strength',
      message: balancedPlayFeedbackOptions[Math.floor(Math.random() * balancedPlayFeedbackOptions.length)],
    });
  }

  return feedback;
};
function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [feedback, setFeedback] = useState<Feedback[] | null>(null); // Null initially for feedback
  const [showNotification, setShowNotification] = useState(false);
  const [showSurvey, setShowSurvey] = useState(true);
  const [strategyResponses, setStrategyResponses] = useState<any>(null);

  // Handle survey submission and store responses
  const handleSurveySubmit = (responses: any) => {
    setStrategyResponses(responses);
    setShowSurvey(false); // Hide survey after submission
  };

  // Handle video upload and simulate analysis
  const handleFileSelected = async (file: File) => {
    setShowNotification(true);
    setIsAnalyzing(true);
    setProgress(0);

    // Generate random duration for loading bar
    const randomDuration = Math.floor(Math.random() * 16) + 15; // Random duration (15 to 30 seconds)
    const totalTime = randomDuration * 1000; // Milliseconds
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(intervalId);
          return 90; // Stop progress at 90%
        }
        return prev + 10;
      });
    }, totalTime / 10); // Update progress at intervals

    // Wait for a random duration before generating feedback
    await new Promise(resolve => setTimeout(resolve, totalTime));

    setProgress(100); // Complete the progress
    setFeedback(generateTailoredFeedback(strategyResponses)); // Generate feedback based on survey responses

    setTimeout(() => {
      setIsAnalyzing(false);
      setProgress(0);
    }, 500); // Reset after 0.5 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {showNotification && (
        <Notification message="Video received! Starting analysis..." onClose={() => setShowNotification(false)} />
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Gamepad2 className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Fortnite Gameplay Analyzer</h1>
            <p className="text-lg text-gray-600">Upload your gameplay video and get AI-powered insights to improve your skills</p>
            <p className="text-black/70 text-sm">Please only drop Battle Royal Gameplay in here</p>
          </div>

          {/* Survey submission triggers */}
          {showSurvey ? (
            <StrategySurvey onSubmit={handleSurveySubmit} />
          ) : (
            <>
              {/* After survey, video analysis */}
              <DragDropZone onFileSelected={handleFileSelected} isLoading={isAnalyzing} />
              {isAnalyzing && <LoadingBar />} {/* Show LoadingBar */}
              {feedback && !isAnalyzing && <AnalysisResult feedback={feedback} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;