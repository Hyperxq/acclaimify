import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AppreciationData } from '@applaudify/ui-components';
import { useNavigate } from 'react-router-dom';

interface UseCardImageActionsProps {
  formData: Partial<AppreciationData>;
  fetchResource: (formData: Partial<AppreciationData>) => Promise<Blob>;
  copyToClipboard: (content: string) => Promise<void>;
}

interface UseCardImageActionsResult {
  isPending: boolean;
  error: Error | null;
  handleDownload: () => void;
  handleCopy: () => void;
}

export const useCardImageActions = ({
  formData,
  fetchResource,
  copyToClipboard,
}: UseCardImageActionsProps): UseCardImageActionsResult => {
  const navigate = useNavigate();

  const downloadMutation: UseMutationResult<Blob, Error, void> = useMutation({
    mutationFn: () => {
      navigate('/loading');
      return fetchResource(formData)
    },
    onSuccess: (imageBlob: Blob) => {
      navigate('/success');
      const url = URL.createObjectURL(imageBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${formData.achieverName ?? 'Unknown'}_recognition_${formData.dateOfAchievement ?? new Date().toISOString()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

    },
    onError: (error: Error) => {
      console.error("Error downloading the image:", error);
      navigate('/');
    },
  });

  // Define copy mutation
  const copyMutation: UseMutationResult<Blob, Error, void> = useMutation({
    mutationFn: () => {
      navigate('/loading');
      return fetchResource(formData)
    },
    onSuccess: async (imageBlob: Blob) => {
      navigate('/success');
      const url = URL.createObjectURL(imageBlob);
      await copyToClipboard(url);
      URL.revokeObjectURL(url);
    },
    onError: (error: Error) => {
      console.error("Error copying the image URL:", error);
      navigate('/');
    },
  });

  return {
    isPending: downloadMutation.isPending || copyMutation.isPending,
    error: downloadMutation.error || copyMutation.error,
    handleDownload: () => downloadMutation.mutate(),
    handleCopy: () => copyMutation.mutate(),
  };
};
