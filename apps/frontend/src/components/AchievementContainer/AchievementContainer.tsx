import { Card } from '@acclaimify/ui-components';
import { useCardRotation } from '../../hooks';
import { ActionMenu } from '../ActionMenu';
import { useFormContext } from '../../contexts';

export default function AchievementContainer() {
  const { formData } = useFormContext();

  const containerId = "achievementContainer";
  const targetId = "card";

  useCardRotation({ containerId, targetId });

  return (
    <section id='achievementContainer' className="duration-500 ease-in-out animate-fadeIn flex flex-row gap-[16px] perspective-[1000px]">
      <Card {...formData} />
      <ActionMenu {...formData} />
    </section>
  );
}
