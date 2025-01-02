import  { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

export function Notification({ message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center space-x-2 shadow-lg animate-fade-in">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}