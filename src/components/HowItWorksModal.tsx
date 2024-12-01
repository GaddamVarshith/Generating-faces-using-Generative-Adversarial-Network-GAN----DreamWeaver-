import React from 'react';
import { Camera, Sparkles, Download, X } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      icon: <Camera className="w-6 h-6 text-primary" />,
      title: "Take Your Photo",
      description: "Use your device's camera to capture a clear portrait photo."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "AI Magic",
      description: "Our advanced AI transforms your photo into various artistic styles."
    },
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Download & Share",
      description: "Download your generated portraits in high resolution."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="modal-backdrop absolute inset-0" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-elegant-hover max-w-2xl w-full p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6">How DreamWeaver Works</h2>

        <div className="grid gap-8 mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          DreamWeaver uses state-of-the-art AI technology to create stunning portraits while ensuring your privacy and data security.
        </p>
      </div>
    </div>
  );
};