import {Hero, NearbySelected} from "@/features/nearby/sections";
import {getStatesServer} from "@/features/location/services";
export default async function NearbyPage() {
  const states = await getStatesServer();

  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <NearbySelected states={states} />
    </div>
  );
}
