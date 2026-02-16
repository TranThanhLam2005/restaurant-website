import {MenuNav, MenuContent} from "@/features/menu";
import {getMenuSectionsServer} from "@/features/menu/services";
import {getStatesServer} from "@/features/location/services";

export default async function MenuLayout() {
  const menuSections = await getMenuSectionsServer();
  const states = await getStatesServer();
  return (
    <MenuNav menuSections={menuSections} states={states}>
      <MenuContent activeCategory={null} />
    </MenuNav>
  );
}
