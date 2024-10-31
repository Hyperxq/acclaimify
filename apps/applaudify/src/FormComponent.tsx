import React, { ChangeEvent } from 'react';
import { TextInput, Textarea, Label, FileInput } from 'flowbite-react';
import { useFormContext } from './useFormContext';

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
        </form>
    );
}
