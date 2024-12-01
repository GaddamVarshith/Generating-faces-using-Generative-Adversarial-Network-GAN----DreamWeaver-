import React from 'react';
import { UserCircle2, User2 } from 'lucide-react';

interface GenderSelectorProps {
  onSelect: (gender: 'male' | 'female') => void;
  onCancel: () => void;
}

export const GenderSelector: React.FC<GenderSelectorProps> = ({ onSelect, onCancel }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800">Select Gender for Generation</h3>
      <div className="flex gap-4">
        <button
          onClick={() => onSelect('male')}
          className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <User2 className="w-5 h-5" />
          Male
        </button>
        <button
          onClick={() => onSelect('female')}
          className="flex items-center gap-2 px-6 py-3 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors"
        >
          <UserCircle2 className="w-5 h-5" />
          Female
        </button>
      </div>
      <button
        onClick={onCancel}
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        Cancel
      </button>
    </div>
  );
};