import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Separator} from "@/components/ui/separator";

export default function AddressHistorySection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3>My address</h3>
        <Button>
          <Plus className="h-4 w-4" />
          Add new address
        </Button>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h4>Tran Thanh Lam</h4>|<p>0123456789</p>
          </div>
          <p>123 ABC, Phu Xuan, Nha Be, HCM</p>
        </div>
        <div className="flex flex-col items-end">
          <div>
            <Button variant="link">Update</Button>
            <Button variant="link">Delete</Button>
          </div>
          <Button variant="outline">Set as default address</Button>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h4>Tran Thanh Lam</h4>|<p>0123456789</p>
          </div>
          <p>123 ABC, Phu Xuan, Nha Be, HCM</p>
        </div>
        <div className="flex flex-col items-end">
          <div>
            <Button variant="link">Update</Button>
            <Button variant="link">Delete</Button>
          </div>
          <Button variant="outline">Set as default address</Button>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h4>Tran Thanh Lam</h4>|<p>0123456789</p>
          </div>
          <p>123 ABC, Phu Xuan, Nha Be, HCM</p>
        </div>
        <div className="flex flex-col items-end">
          <div>
            <Button variant="link">Update</Button>
            <Button variant="link">Delete</Button>
          </div>
          <Button variant="outline">Set as default address</Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}
