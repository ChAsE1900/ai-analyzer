import { CheckCircle, AlertTriangle, Trophy } from 'lucide-react';

interface Feedback {
  type: 'strength' | 'improvement';
  message: string;
}

interface AnalysisResultProps {
  feedback: Feedback[];
}

export function AnalysisResult({ feedback }: AnalysisResultProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-bold">Analysis Results</h2>
      </div>
      
      <div className="space-y-4">
        {feedback.map((item, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 p-4 rounded-lg ${
              item.type === 'strength' ? 'bg-green-50' : 'bg-amber-50'
            }`}
          >
            {item.type === 'strength' ? (
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
            )}
            <p className={`${
              item.type === 'strength' ? 'text-green-700' : 'text-amber-700'
            }`}>
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}