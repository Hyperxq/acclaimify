export interface AppreciationData {
  achieverName: string; // Achiever's Name
  position: string; // Position of the achiever
  projectName: string; // Project name associated with the achievement
  photo?: null | File; // Achiever's photo, as a File for upload or URL if pre-uploaded
  dateOfAchievement?: string; // Date when the achievement was completed
  achievementSummary?: string; // Optional summary of the achievement
  recognizer?: string;
  personalNote?: string; // Optional personal message or note
}
