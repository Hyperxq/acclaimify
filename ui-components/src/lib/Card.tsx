interface Props {
  achieverName: string; // Achiever's Name
  position: string; // Position of the achiever
  projectName: string; // Project name associated with the achievement
  photo?: null | File; // Achiever's photo, as a File for upload or URL if pre-uploaded
  dateOfAchievement?: string; // Date when the achievement was completed
  achievementSummary?: string; // Optional summary of the achievement
  recognizer?: string;
  personalNote?: string; // Optional personal message or note
}

export default function Card(formData: Props) {

  return (
    <div className="card mx-auto mt-8 max-w-sm rounded-lg bg-gray-100 p-4 shadow-md">
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
