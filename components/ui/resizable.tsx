"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

/* ---------------- Panel Group ---------------- */

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof Group>) {
  return (
    <Group
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

/* ---------------- Panel ---------------- */

function ResizablePanel(
  props: React.ComponentProps<typeof Panel>
) {
  return <Panel data-slot="resizable-panel" {...props} />
}

/* ---------------- Handle (Separator) ---------------- */

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        "bg-border relative flex items-center justify-center",
        "data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full",
        "data-[orientation=horizontal]:w-px data-[orientation=horizontal]:h-full",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </Separator>
  )
}

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
}
