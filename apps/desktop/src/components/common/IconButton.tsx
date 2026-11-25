
import type { LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface IconButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export function IconButton({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  className = '',
}: IconButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={label}
            onClick={onClick}
            disabled={disabled}
            className={`size-8 shrink-0 rounded-md ${className}`}
          />
        }
      >
        <Icon className="size-4" strokeWidth={1.8} />
      </TooltipTrigger>

      <TooltipContent side="bottom">
        {label}
      </TooltipContent>
    </Tooltip>
  )
}
