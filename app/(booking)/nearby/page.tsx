import {Hero, NearbySelected} from "@/features/nearby/sections";
import {getStatesServer} from "@/features/location/services";
export default async function NearbyPage() {
  const states = await getStatesServer();

  return (
    <div>
      <div className="flex flex-col mx-40 my-24 gap-10">
        <Hero />
        <NearbySelected states={states} />
      </div>
    </div>
  );
}
