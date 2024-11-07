import { useFormContext } from './useFormContext';
import { Card } from '@applaudify/ui-components';
import { useCardRotation } from './useCardRotation';
import { ActionMenu } from './ActionMenu';

export default function AchievementContainer() {
  const { formData } = useFormContext();

  const containerId = "achievementContainer";
  const targetId = "card";

  useCardRotation({ containerId, targetId });

  return (
    <section id='achievementContainer' className="flex flex-row gap-[16px] perspective-[1000px]">
      <Card {...formData} />
      <ActionMenu {...formData} />
    </section>
  );
}
