'use client';

import * as React from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInfobar } from '@/components/ui/infobar';
import { cn } from '@/lib/utils';
export function InfoButton({
  content,
  className,
  variant = 'ghost',
  size = 'icon',
  ...props
}) {
  const {
    setContent,
    setOpen
  } = useInfobar();

  // Automatically set content when component mounts (e.g., on page load/refresh)
  React.useEffect(() => {
    setContent(content);
  }, [content, setContent]);
  const handleClick = e => {
    setContent(content);
    setOpen(true);
    props.onClick?.(e);
  };
  return <Button variant={variant} size={size} className={cn('shrink-0', className)} onClick={handleClick} aria-label='Show information' {...props}>
      <Info className='h-4 w-4' />
      <span className='sr-only'>Show information</span>
    </Button>;
}