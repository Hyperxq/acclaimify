import { ChangeEvent, useRef } from 'react';
import { TextInput, Datepicker, Textarea } from 'flowbite-react';
import { useForm } from '@tanstack/react-form';
import axios from 'axios';
import { AppreciationData } from '@acclaimify/ui-components';
import { useFormContext } from '../../contexts';

const apiUrl = import.meta.env.VITE_API_URL;

export default function FormComponent() {
  const form = useForm<AppreciationData>({
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    }
  })
  const { formData, setFormData } = useFormContext();

  const handleChange = (field: any, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.handleChange(e.target.value)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (field: any, date: string | undefined) => {
    field.handleChange(date)
    setFormData({ ...formData, dateOfAchievement: date });
  }

  const downloadRef = useRef<HTMLAnchorElement>(null);

  const onSubmit = async (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
    event.preventDefault();
    event.stopPropagation();
    form.handleSubmit();
    handleDownload();
  }

  const handleDownload = async () => {

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

    <form onSubmit={onSubmit} className="mx-auto p-[1.8rem] space-y-5 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <form.Field
          name="achieverName"
          children={(field) => (
            <TextInput
              id={field.name}
              placeholder="Achiever Name"
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => handleChange(field, e)}
              required
            />
          )}
        />
        <form.Field
          name="position"
          children={(field) => (
            <TextInput
              id={field.name}
              name={field.name}
              placeholder="Position"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => handleChange(field, e)}
              required
            />
          )}
        />
      </div>

      <div>
        <form.Field
          name="projectName"
          children={(field) => (
            <TextInput
              id={field.name}
              name={field.name}
              placeholder="Project Name"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => handleChange(field, e)}
              required
            />
          )}
        />
      </div>

      <div>
        <form.Field
          name="dateOfAchievement"
          children={(field) => (
            <Datepicker
              id={field.name}
              name={field.name}
              title="Date of Achievement"
              placeholder="Select the Date of Achievement"
              onBlur={field.handleBlur}
              onChange={(date) => handleDateChange(field, date?.toDateString())}
              required
            />
          )}
        />
      </div>

      <div>
        <form.Field
          name="achievementSummary"
          children={(field) => (
            <Textarea
              id={field.name}
              name={field.name}
              className='max-h-72'
              placeholder="Enter your message..."
              maxLength={152}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => handleChange(field, e)}
              required
            />
          )}
        />
      </div>

      {/* Hidden link element used for download */}
      <a ref={downloadRef} style={{ display: 'none' }}>Download Link</a>
    </form>

  );
}
