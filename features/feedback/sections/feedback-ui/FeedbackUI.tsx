import {Dot} from "lucide-react";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
export default function FeedbackUI() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://example.com/user-avatar.jpg"
              alt="User Avatar"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <p>Kamisto Ayato</p>
          <Dot className="h-4 w-4 inline-block" />
          <span>2 days ago</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge>Meat</Badge>
          <Badge variant="outline">Product</Badge>
          <Badge variant="destructive">Dissatisfied</Badge>
        </div>
      </div>
      <h4>User-Friendly App Enhances Dining Experience</h4>
      <p className="text-muted-foreground font-light">
        I'm very impressed with the restaurant's app. It's user-friendly and
        makes ordering food a breeze. The interface is intuitive, and I love the
        variety of options available. It has definitely enhanced my dining
        experience!
      </p>
    </div>
  );
}
