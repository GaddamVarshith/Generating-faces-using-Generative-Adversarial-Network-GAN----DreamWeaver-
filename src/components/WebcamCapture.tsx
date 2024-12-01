import React, { useRef, useCallback, useState } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  isDisabled: boolean;
}

export const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onCapture, isDisabled }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
        setError(null);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Unable to access camera. Please ensure camera permissions are granted.');
      setIsCameraActive(false);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsCameraActive(false);
    }
  }, []);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        // Set canvas dimensions to match video aspect ratio
        const aspectRatio = video.videoWidth / video.videoHeight;
        canvas.width = 1280;
        canvas.height = 1280 / aspectRatio;

        // Draw video frame to canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert to high-quality JPEG
        const imageSrc = canvas.toDataURL('image/jpeg', 0.9);
        onCapture(imageSrc);
        stopCamera();
      }
    }
  }, [onCapture, stopCamera]);

  const retryCamera = useCallback(() => {
    stopCamera();
    startCamera();
  }, [stopCamera, startCamera]);

  React.useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, [startCamera, stopCamera]);

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-center">
        <p className="text-red-600 mb-2">{error}</p>
        <button
          onClick={retryCamera}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg
                   hover:bg-red-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Retry Camera
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" />
        
        {!isCameraActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/75">
            <div className="text-white text-center">
              <Camera className="w-8 h-8 mx-auto mb-2 animate-pulse" />
              <p>Starting camera...</p>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={capturePhoto}
        disabled={isDisabled || !isCameraActive}
        className="capture-btn w-full flex items-center justify-center gap-2 px-4 py-3 
                 bg-black text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed
                 hover:shadow-rose transition-all duration-300"
      >
        <Camera className="w-5 h-5 btn-icon transition-transform duration-300" />
        <span className="btn-text transition-opacity duration-300">
          {isDisabled ? 'Processing...' : 'Capture Photo'}
        </span>
        <div className="sparkle" />
        <div className="sparkle" />
        <div className="sparkle" />
        <div className="sparkle" />
        <div className="sparkle" />
      </button>
    </div>
  );
};