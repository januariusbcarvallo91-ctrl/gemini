import * as Lucide from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon = ({ name, className, size = 20 }: DynamicIconProps) => {
  // Safe fallback to HelpCircle if the icon name is not found
  const IconComponent = (Lucide as any)[name] || Lucide.HelpCircle;
  return <IconComponent className={className} size={size} />;
};
