import { Button, Menu, Portal } from "@chakra-ui/react";
import { categories } from "../../data/category_data";
import { UserContext } from "../../pages/home/Home";
import { useContext } from "react";
import { getCategory } from "../../APIs/getCategory/getCategory";
import { allShopProducts } from "../../APIs/getAllProducts/getAllProducts";

export default function MenuComponent() {
  const { setSearchProduct } = useContext(UserContext);
  const renderCategories = ["Show All", ...categories];

  async function getProducts(product) {
    if (product === "Show All") {
      //return all products
      setSearchProduct(await allShopProducts(categories));
    } else {
      //return selected category
      setSearchProduct(await getCategory(product));
    }
  }

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline" disabled>
            Categories
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {renderCategories.map((category, index) => (
                <Menu.Item
                  key={index}
                  asChild
                  value={category}
                  onClick={(e) => getProducts(e.target.innerText)}
                >
                  <p>
                    {category.slice(0, 1).toUpperCase() + category.slice(1)}
                  </p>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}
