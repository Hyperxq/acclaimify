import { useFormContext } from './useFormContext';
import { Card } from '@applaudify/ui-components';

export default function CardContainer() {
  const { formData } = useFormContext();

  return (
    <Card formData={formData} />
  );
}
