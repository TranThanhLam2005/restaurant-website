import {Skeleton} from "@/components/ui/skeleton";
export default function VoucherCode() {
  return (
    <div className="flex flex-col gap-4 mb-24">
      <h2 className="font-bold text-muted-foreground text-center">
        Voucher Categories
      </h2>
      <h4 className="text-muted-foreground font-light">
        Send friends, associates or loved ones the gift of dining with a few
        taps!
      </h4>
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-40 w-full rounded-md" />
      </div>
    </div>
  );
}
