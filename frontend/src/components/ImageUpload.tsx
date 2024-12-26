import React, { useCallback, useRef, useState } from 'react';
import { Upload, Camera } from 'lucide-react';
import { Button } from './Button';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera. Please ensure you have granted camera permissions.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setShowCamera(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'camera-capture.jpg', { type: 'image/jpeg' });
            onImageSelect(file);
            stopCamera();
          }
        }, 'image/jpeg');
      }
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="space-y-6">
      {showCamera ? (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full rounded-lg"
          />
          <canvas ref={canvasRef} className="hidden" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-4">
            <Button onClick={capturePhoto}>
              Take Photo
            </Button>
            <Button variant="secondary" onClick={stopCamera}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-green-500 rounded-lg p-8 text-center cursor-pointer hover:border-green-600 transition-colors"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            <Upload className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <p className="text-lg font-medium text-gray-700">
              Drag and drop your maize leaf image here
            </p>
            <p className="text-sm text-gray-500 mt-2">
              or click to select a file from your device
            </p>
          </label>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={startCamera}
              className="flex items-center space-x-2"
            >
              <Camera className="h-5 w-5" />
              <span>Take Photo with Camera</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}