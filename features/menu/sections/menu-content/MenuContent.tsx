import {ResizablePanel} from "@/components/ui/resizable";
import {Skeleton} from "@/components/ui/skeleton";

import {ScrollArea} from "@/components/ui/scroll-area";
export default function MenuContent() {
  return (
    <ResizablePanel defaultSize={75}>
      <ScrollArea className="h-full w-full px-6">
        <h3 className="mb-4">Menu Items</h3>

        {/* Placeholder grid — YOU replace this */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      </ScrollArea>
    </ResizablePanel>
  );
}
