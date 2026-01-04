import {GoogleMapsEmbed} from "@next/third-parties/google";

export default function GoogleMap({query}: {query?: string}) {
  return (
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY || ""}
      height={500}
      width="100%"
      mode="place"
      q={query || "Texas Roadhouse, Nearby"}
    />
  );
}
