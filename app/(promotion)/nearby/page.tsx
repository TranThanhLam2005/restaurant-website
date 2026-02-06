import {Hero, NearbySelected} from "@/features/nearby/sections";
import {getStatesServer} from "@/features/location/services";
export default async function NearbyPage() {
  const states = await getStatesServer();

  return (
    <>
      <Hero />
      <NearbySelected states={states} />
    </>
  );
}
