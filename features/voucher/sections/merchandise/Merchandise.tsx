
import {Skeleton} from "@/components/ui/skeleton";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";

export default function Merchandise() {
  return (
    <ResizablePanelGroup orientation="horizontal">
      <ResizablePanel defaultSize={25} minSize={20}>
        <ScrollArea className="h-full w-full pr-4">
          <h2 className="font-bold text-muted-foreground text-center mb-4">
            Merchandise
          </h2>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="apparel-clothing">
              <AccordionTrigger>Apparel & Clothing</AccordionTrigger>
              <AccordionContent>
                <Button variant="link" className="w-full justify-start">
                  Outerwear
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Formal Wear
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Activewear
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="home-fragrance-decor">
              <AccordionTrigger>Home Fragrance & Decor</AccordionTrigger>
              <AccordionContent>
                <Button variant="link" className="w-full justify-start">
                  Candles
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Vases
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Diffusers
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </ResizablePanel>

      <ResizableHandle />

      {/* ===== MAIN CONTENT ===== */}
      <ResizablePanel defaultSize={75}>
        {/* Placeholder grid — YOU replace this */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
