import {
  Card,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function Hero() {
  return (
    <>
      <Card className="flex flex-row gap-10 p-10">
        <img
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/texas-roadhouse-exterior.jpg?quality=82&strip=1"
          alt="Nearby Location"
          className="w-1/3 h-auto rounded-4xl shadow-lg"
        />
        <div className="flex flex-col flex-1 gap-6">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://i.pinimg.com/736x/12/78/1c/12781c5de0a36e91dd57734a91ec88a2.jpg"
                alt="Nearby Location"
                className="w-16 h-16"
              ></img>
              <CardTitle>872 restaurants</CardTitle>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://s3-symbol-logo.tradingview.com/texas-roadhouse--600.png"
                alt="Nearby Location"
                className="w-16 h-16"
              ></img>
              <CardTitle>{">"} 120 millions customer</CardTitle>
            </div>
          </div>
          <CardContent>
            Texas Roadhouse is a popular American steakhouse known for its bold,
            hearty flavors. The restaurant specializes in hand-cut steaks,
            fall-off-the-bone ribs, and classic American sides. It is famous for
            its freshly baked bread served with signature cinnamon butter. Texas
            Roadhouse emphasizes a lively, casual dining atmosphere inspired by
            Texas culture. Guests often enjoy country music and energetic staff
            line dances. The menu focuses on generous portions at affordable
            prices. Quality, freshness, and friendly service are key values of
            the brand. Texas Roadhouse aims to deliver a fun and satisfying
            dining experience for families and groups.
          </CardContent>
        </div>
        {/* Additional content for nearby locations can be added here */}
      </Card>
    </>
  );
}
