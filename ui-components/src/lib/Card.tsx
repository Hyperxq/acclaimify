import React from 'react';
import { AppreciationData } from "./interfaces/data.interface";

export const Card = (formData: AppreciationData) => {

  return (
    <div id="card" className="max-w-md p-6 bg-gray-100 rounded-lg shadow-md" style={{ minWidth: '800px' }}>
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Appreciation Summary</h2>
      <p>
        <strong>Achiever’s Name:</strong> {formData.achieverName || 'N/A'}
      </p>
      <p>
        <strong>Position:</strong> {formData.position || 'N/A'}
      </p>
      <p>
        <strong>Project Name:</strong> {formData.projectName || 'N/A'}
      </p>
      <p>
        <strong>Date of Achievement:</strong> {formData.dateOfAchievement || 'N/A'}
      </p>
      <p>
        <strong>Recognizer’s Name:</strong> {formData.recognizer || 'N/A'}
      </p>
      <p>
        <strong>Personal Note:</strong> {formData.personalNote || 'N/A'}
      </p>
      {/* Display the photo if available */}
      {formData.photo && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(formData.photo)}
            alt="Achiever"
            className="h-40 w-full rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
}
