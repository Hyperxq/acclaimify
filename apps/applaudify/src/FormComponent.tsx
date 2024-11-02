import React, { ChangeEvent, useRef } from 'react';
import { TextInput, Textarea, Label, FileInput } from 'flowbite-react';
import { useFormContext } from './useFormContext';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export default function FormComponent() {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/cards/generate`, formData, {
        responseType: 'blob', // Ensures response is handled as binary data
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'card.png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <form className="mx-auto max-w-sm space-y-4">
      <div>
        <Label htmlFor="achieverName" value="Achiever’s Name" />
        <TextInput
          id="achieverName"
          name="achieverName"
          value={formData.achieverName}
          onChange={handleChange}
          placeholder="Enter achiever's name"
          required
        />
      </div>

      <div>
        <Label htmlFor="position" value="Position" />
        <TextInput
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Enter position"
          required
        />
      </div>

      <div>
        <Label htmlFor="projectName" value="Project Name" />
        <TextInput
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          placeholder="Enter project name"
          required
        />
      </div>

      <div>
        <Label htmlFor="photo" value="Photo" />
        <FileInput
          id="photo"
          name="photo"
          accept='image/png, image/jpeg'
          onChange={handleFileChange}
          helperText="Only PNG, JPG"
        />
      </div>

      <div>
        <Label htmlFor="dateOfAchievement" value="Date of Achievement" />
        <TextInput
          id="dateOfAchievement"
          name="dateOfAchievement"
          value={formData.dateOfAchievement}
          onChange={handleChange}
          placeholder="Select date"
        />
      </div>

      <div>
        <Label htmlFor="recognizer" value="Recognizer's Name and Position" />
        <TextInput
          id="recognizer"
          name="recognizer"
          value={formData.recognizer}
          onChange={handleChange}
          placeholder="Enter recognizer's name and position"
          required
        />
      </div>

      <div>
        <Label htmlFor="personalNote" value="Message or Personal Note" />
        <Textarea
          id="personalNote"
          name="personalNote"
          value={formData.personalNote}
          onChange={handleChange}
          placeholder="Write your thoughts here..."
          rows={4}
        />
      </div>

      <button onClick={handleDownload}>Download Card Image</button>
      {/* Hidden link element used for download */}
      <a ref={downloadRef} style={{ display: 'none' }}>Download Link</a>
    </form>
  );
}
