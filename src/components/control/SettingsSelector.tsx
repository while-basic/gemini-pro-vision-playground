"use client";
import * as React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SettingsSelectorProps {
  readonly label: string;
  readonly hoverText: string;
  readonly step: number;
  readonly max: number;
  readonly value: number;
  readonly onValueChange: (newValue: number[]) => void;
}

export function SettingsSelector({
  label,
  hoverText,
  step,
  max,
  value,
  onValueChange,
}: SettingsSelectorProps) {
  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor={label}>{label}</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {value}
              </span>
            </div>
            <Slider
              id={label}
              max={max}
              defaultValue={[value]}
              step={step}
              onValueChange={onValueChange}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label={label}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="right"
        >
          {hoverText}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
