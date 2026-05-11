import { Button, Menu, Portal } from "@chakra-ui/react";
import { categories } from "../../data/category_data";
import { UserContext } from "../../pages/home/Home";
import { useContext } from "react";
import { getCategory } from "../../APIs/getCategory/getCategory";

export default function MenuComponent() {
  const { setSearchProduct } = useContext(UserContext);

  async function getProducts(product) {
    setSearchProduct(await getCategory(product));
  }

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline">
            Categories
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {categories.map((category, index) => (
                <Menu.Item
                  key={index}
                  asChild
                  value={category}
                  onClick={(e) => getProducts(e.target.innerText)}
                >
                  <p>{category}</p>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}
