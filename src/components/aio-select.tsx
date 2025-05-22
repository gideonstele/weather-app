import { useMemo, useState, type ReactNode } from 'react';

import { ChevronDownIcon, Loader2Icon } from 'lucide-react';
import { useControllableValue } from 'ahooks';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@components/ui/select';

import { cn } from './lib/utils';

export interface SelectOption {
  label: ReactNode;
  value: string;
}

export interface AioSelectProps {
  isLoading?: boolean;
  value?: string;
  isDisabled?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  onChange?: (value: string, option?: SelectOption) => void;
}

export const AioSelect = ({
  isLoading,
  value: valueProps,
  options,
  isDisabled,
  placeholder,
  onChange,
}: AioSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useControllableValue({
    value: valueProps,
    onChange,
  });

  const icon = useMemo(() => {
    if (isLoading) {
      return <Loader2Icon className="size-4 animate-spin" />;
    }

    return <ChevronDownIcon className={cn('size-4 opacity-50', isOpen && 'rotate-180')} />;
  }, [isLoading, isOpen]);

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <section className="flex items-center justify-center">
          <Loader2Icon className="size-4 animate-spin" />
        </section>
      );
    }

    if (!options || options.length === 0) {
      return <></>;
    }

    return options.map((option) => (
      <SelectItem
        key={option.value}
        value={option.value}
      >
        {option.label}
      </SelectItem>
    ));
  }, [isLoading, options]);

  return (
    <Select
      value={value}
      onValueChange={setValue}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SelectTrigger
        disabled={isDisabled}
        customIcon={icon}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{content}</SelectContent>
    </Select>
  );
};
