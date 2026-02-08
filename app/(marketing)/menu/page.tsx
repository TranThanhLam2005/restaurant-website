import {MenuNav, MenuContent} from "@/features/menu";
import {getMenuSectionsServer} from "@/features/menu/services";

export default async function MenuLayout() {
  const menuSections = await getMenuSectionsServer();
  return (
    <MenuNav menuSections={menuSections}>
      <MenuContent activeCategory={null} />
    </MenuNav>
  );
}
